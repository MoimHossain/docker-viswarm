
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var Docker = require('dockerode');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('src'))

var port = process.env.PORT || 9009;        // set our port

var router = express.Router();              // get an instance of the express Router


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/containers', function(req, res) {
    
    var docker = new Docker();
    docker.listContainers({all: false}, function(err, containers) {
        res.json(containers);
    });
});
router.get('/images', function(req, res) {
    
    var docker = new Docker();
    docker.listImages({all: false}, function(err, images) {
        res.json(images);
    });
});


router.get('/networks', function(req, res) {
    
    var docker = new Docker();
    docker.listNetworks({all: false}, function(err, networks) {
        res.json(networks);
    });
});
router.get('/swarm', function(req, res) {
    
    var docker = new Docker();
   
    docker.swarmInspect(function(err, swarnInfo) {
        res.json(swarnInfo);
    });
});

router.get('/nodes', function(req, res) {
    
    var docker = new Docker();
   
    docker.listNodes(function(err, nodes) {
        res.json(nodes);
    });
});

router.delete('/nodes/:nodeId', function(req, res) {
    if(req.params.nodeId) {
        console.log('Request DELETE NODE ID=' + req.params.nodeId)
        var docker = new Docker();
        docker.listNodes({all: true}, function(err, nodes) {
            nodes.forEach((node) => {                
                if(node.ID === req.params.nodeId) {
                    node.remove({force: true}, function(nres) {
                        res.json(nres);
                    });
                }
            });
        });
    } else {
        res.json({ message: 'Invalid operation.' });
    }
});

router.get('/services', function(req, res) {
    
    var docker = new Docker();
   
    docker.listServices(function(err, nodes) {
        res.json(nodes);
    });
});

router.put('/services/:serviceId', function(req, res) {
    if(!req.params.serviceId) {
        return res.status(400).json({ message: 'Service ID is required' });
    }
    
    var docker = new Docker();
    var service = docker.getService(req.params.serviceId);
    
    // Get current service spec
    service.inspect(function(err, serviceData) {
        if(err) {
            console.error('Error inspecting service:', err);
            return res.status(500).json({ message: 'Failed to get service details' });
        }
        
        // Prepare update spec based on current service
        var updateSpec = serviceData.Spec;
        
        // Update image if provided
        if(req.body.image) {
            updateSpec.TaskTemplate.ContainerSpec.Image = req.body.image;
        }
        
        // Update replicas if provided
        if(req.body.replicas !== undefined) {
            if(updateSpec.Mode.Replicated) {
                updateSpec.Mode.Replicated.Replicas = parseInt(req.body.replicas);
            }
        }
        
        // Update service with new spec
        var updateOptions = {
            version: serviceData.Version.Index
        };
        
        service.update(updateOptions, updateSpec, function(updateErr, result) {
            if(updateErr) {
                console.error('Error updating service:', updateErr);
                return res.status(500).json({ message: 'Failed to update service' });
            }
            
            // Return updated service data
            service.inspect(function(inspectErr, updatedServiceData) {
                if(inspectErr) {
                    console.error('Error getting updated service:', inspectErr);
                    return res.status(500).json({ message: 'Service updated but failed to retrieve updated data' });
                }
                res.json(updatedServiceData);
            });
        });
    });
});

router.get('/tasks', function(req, res) {
    
    var docker = new Docker();
   
    docker.listTasks(function(err, nodes) {
        res.json(nodes);
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);