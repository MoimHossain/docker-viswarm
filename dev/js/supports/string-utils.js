
let maxLength = 16;

module.exports = {
    truncate: function(nodeName) {
        if(nodeName.length <= 17) return nodeName;        
        return nodeName.substring(0, 8) + '...' + nodeName.slice(-8);
    },
    truncateNodeName: function(nodeName) {        
        if(nodeName.length <= 7) return nodeName;        
        return nodeName.substring(0, 3) + '...' + nodeName.slice(-3);
    },
    truncateImageName: function(imageName) {        
        var name = [];
        for(var x = 0; x < maxLength && x < imageName.length; ++ x) {
            var char = imageName.charAt(x);
            if(char === '@') x = maxLength;
            else {
                name.push(char);
            }
        }
        return name.join('');
    }
};