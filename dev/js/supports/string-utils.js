
let maxLength = 16;

module.exports = {
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