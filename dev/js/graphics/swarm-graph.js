
import canvasRenderer from './canvas-renderer';
import loadAction from '../actions/actionLoadNodes';

const cameraPositions = [
    [-673.1252997241281, -432.32202219098525],
    [-665.8563502205566, -443.4358136990735],
        [-657.6759832836207, -455.4802970622578],
        [-649.8381640832819, -466.5944282788529],
        [-643.3374768556465, -475.5174979672257],
        [-639.8010763906608, -480.2651170440674],
        [-636.4235733107832, -484.7319211010701],
        [-633.6991070138004, -488.28827732182145],
        [-630.7087775750829, -492.1447326648378],
        [-626.9999768289176, -496.86117684574305],
        [-624.1577017830983, -500.4269809920732],
        [-620.6899337344976, -504.7217116002293],
        [-617.8537717913963, -508.1896463753912],
        [-615.3051134286704, -511.27254707106164],
        [-612.0203803065378, -515.2000136737583],
        [-609.3849216369099, -518.3145929660645],
        [-606.9421187404643, -521.1729698467068],
        [-604.0140457096476, -524.5636592306636],
        [-601.3309212196261, -527.6373026854297],
        [-598.5260186797979, -530.8169222653986],
        [-595.8110739845697, -533.8624955148597],
        [ -593.18801699373, -536.775536416337],
        [  -590.6046591180906,-539.6166571076211],
        [   -587.4106622762259, -543.0918097745589],
        [    -584.6332766109596, -546.0805177619261],
    [   -580.7964211408679, -550.1595379432766],
    [   -577.7617641235231, -553.3455917569728],
    [   -574.709646324119, -556.5148896678381],
    [   -571.0801811091297, -560.238722996156],
    [   -567.7648546979033, -563.5983230722647],
    [   -564.7698147127485, -566.5995555851838],
    [  -561.2460732611218, -570.0902079925347],
    [   -557.9301234304829, -573.3358329712579],
    [  -554.9988778501188, -576.1737980723428],
    [   -551.5897977373061, -579.4382581708925],
    [   -548.5692757016991, -582.2986774466461],
    [   -545.6509401336731, -585.0342310764719],
    [   -542.0721022689514, -588.3517960724854],
    [   -538.8279915113407, -591.3242727673662],
      [-538.8279915113407, -591.3242727673662],
    [-538.8279915113407, -591.3242727673662],
    [    -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [    -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [    -538.8279915113407, -591.3242727673662],
    [    -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [ -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [  -538.8279915113407, -591.3242727673662],
    [   -538.8279915113407, -591.3242727673662],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-535.5081408882387, -594.3324246938091],
    [-532.290952506755, -597.2154903210828],
    [-529.1782502248134, -599.9753157330764],
    [-525.9306826581586, -602.824117831],
    [-522.607218831712, -605.7075984540586],
    [-519.4504887219458, -608.4169538782854],
    [-515.3624610337214, -611.8835949404641],
];

class SwarmGraph {
    constructor(element) {
        this.element = element;
        this.config = {
            frustumSize: 1000,
            width: 800,
            height: 500,
            getAspectRatio: () => {
                return this.config.width / this.config.height;
            }
        };
        this.g = {
            scene: null,
            camera: null,
            renderer: null
        };

        this.taskMashs = [];
        this.nodeMashs = [];
        
        this.materials = {};
        this.nodeGeo = new THREE.BoxGeometry(300, 50, 300);
        this.taskGeo = new THREE.BoxGeometry(30, 30, 30);
        this.texloader = new THREE.TextureLoader();
    }

    createSpaceTime() {
        var geometry = new THREE.Geometry();
        for ( var i = 0; i < 10000; i ++ ) {
            var vertex = new THREE.Vector3();
            vertex.x = THREE.Math.randFloatSpread( 2000 );
            vertex.y = THREE.Math.randFloatSpread( 2000 );
            vertex.z = THREE.Math.randFloatSpread( 2000 );
            geometry.vertices.push( vertex );
        }
        var particles = new THREE.Points( geometry, new THREE.PointsMaterial( { color: 0x888888 } ) );
        this.g.scene.add( particles );        
    }

    createLights() {
        this.g.ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );        
        this.g.directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        this.g.directionalLight.position.x = Math.random() - 0.5;
        this.g.directionalLight.position.y = Math.random() - 0.5;
        this.g.directionalLight.position.z = Math.random() - 0.5;
        this.g.directionalLight.position.normalize();
        
        this.g.directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
        this.g.directionalLight.position.x = Math.random() - 0.5;
        this.g.directionalLight.position.y = Math.random() - 0.5;
        this.g.directionalLight.position.z = Math.random() - 0.5;
        this.g.directionalLight.position.normalize();
        
        this.g.scene.add(this.g.ambientLight);
        this.g.scene.add(this.g.directionalLight);
        this.g.scene.add(this.g.directionalLight); 
    }

    createTasks(tasks, nodePosition, nodeSize) {        
        var width = 30, height = 30, loc = 30;
        var nodeX = nodePosition.x - (nodeSize.width / 2) + 30, 
            nodeY = nodePosition.y + nodeSize.height + 5,
            nodeZ = nodePosition.z + (nodeSize.loc / 2);

        tasks.map((task, index)=> {
            if(index > 0 && index % 30 === 0) {
                nodeX = nodePosition.x - (nodeSize.width / 2) + 10;                
                nodeZ = nodePosition.z + (nodeSize.loc / 2);
                nodeY = nodeY + (height + 20 );
            }
            else if(index > 0 && index % 6 === 0) {
                nodeX = nodePosition.x - (nodeSize.width / 2) + 10;
                nodeZ = nodeZ - (loc + 30);
            }
            var cube = new THREE.Mesh(this.taskGeo, this.materials.container);
            cube.position.x = nodeX;
            cube.position.y = nodeY;
            cube.position.z = nodeZ;
            this.g.scene.add(cube);
            this.taskMashs.push({ ID : task.ID, mash: cube });
            nodeX = nodeX + width + 20;
        });
    }


    createCubes() {
        this.nodeMashs.map(n=> {
            this.g.scene.remove(n.mash);
        });
        this.taskMashs.map(t=> {
            this.g.scene.remove(t.mash);
        });
        this.taskMashs = [];
        this.nodeMashs = [];
        var nodeX = -350, nodeY = 25, nodeZ = 350;
        this.nodes.map((node, index) => {
            if (index > 0 && index % 3 === 0) {
                nodeX = -350;
                nodeZ = nodeZ - 350;
            }
            var cube = new THREE.Mesh(this.nodeGeo, (node.Status.State === 'ready' ? (node.ManagerStatus ? this.materials.managerNode : this.materials.activeNode) : this.materials.failedNode ));
            cube.position.x = nodeX;
            cube.position.y = nodeY;
            cube.position.z = nodeZ;
            
            var fk = [1, 2, 2, 2, 2, 2, 2, 2, 2 ]                
            this.createTasks(fk, cube.position, { width: 300, height: 50, loc: 300 });

            this.g.scene.add(cube);
            this.nodeMashs.push({ ID: node.ID, mash: cube});
            nodeX = nodeX + 350;            
        });

        
    }

    init() {
        var aspect = this.config.getAspectRatio();
        var frustumSize = this.config.frustumSize;

        this.g.camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 2000);
        this.g.camera.position.y = 400;
        this.g.scene = new THREE.Scene();
        //this.g.scene.background = new THREE.Color(0xf0f0f0);

        var gridHelper = new THREE.GridHelper( 1000, 40 );
        this.g.scene.add( gridHelper );
        
        this.createLights();
        this.createSpaceTime();
        this.createCubes(this.g.scene);       

        
		this.g.renderer = new THREE.CanvasRenderer();
        this.g.renderer.setPixelRatio( window.devicePixelRatio );
        this.g.renderer.setSize(this.config.width, this.config.height);
        this.element.appendChild(this.g.renderer.domElement);

        this.render();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.render();
    }  

    render() {        
        if(!this.repeat) {
            this.repeat  = 1;
        } else {
            this.repeat = this.repeat + 1;
            if(this.repeat % 5 === 0) {                
                this.createCubes();
            }
        }
/*
        if(!this.direction) {
            this.posIndex = 0;
            this.direction = true;
            return;
        } else {
            if(this.direction === true) {
                if(this.posIndex === cameraPositions.length)                 {
                    this.direction = false;
                    return;
                } else {                                        
                    this.posIndex = this.posIndex + 1;
                }
            } else {                
                if(this.posIndex === -1)                 {
                    this.direction = true;
                    return;
                } else {
                    this.posIndex = this.posIndex - 1;
                }                
            }
        }        
        if(this.posIndex >= 0 && this.posIndex < cameraPositions.length) {
            this.g.camera.position.x = cameraPositions[this.posIndex][0];
            this.g.camera.position.z = cameraPositions[this.posIndex][1];
            this.g.camera.lookAt( this.g.scene.position );
            this.g.renderer.render( this.g.scene, this.g.camera );
        }*/

        var timer = Date.now() * 0.0001;
        // hard code
        //timer = 150364423.8454;
        this.g.camera.position.x = Math.cos( timer ) * 800;
        this.g.camera.position.z = Math.sin( timer ) * 800;
        this.g.camera.lookAt( this.g.scene.position );
        this.g.renderer.render( this.g.scene, this.g.camera );
    }

    start() {
        var self = this;

        loadAction()(data => {
            self.nodes = data.payload;           
            
            self.texloader.load('/images/metal/gn.jpg', function(ant) {
                self.materials.activeNode = new THREE.MeshBasicMaterial({
                    map: ant
                });
                self.texloader.load('/images/metal/mgr.jpg', function(mgrt) {
                    self.materials.managerNode = new THREE.MeshBasicMaterial({
                        map: mgrt
                    });
                    self.texloader.load('/images/metal/rn.jpg', function(ft) {
                        self.materials.failedNode = new THREE.MeshBasicMaterial({
                            map: ft
                        });
                        self.texloader.load('/images/metal/bp3.jpg', function(ctr) {        
                            self.materials.container = new THREE.MeshBasicMaterial({                                
                                map: ctr
                            });
                            self.init();            
                            self.animate();
                        });
                    });
                });
            });

        });
    }
}

export default SwarmGraph;