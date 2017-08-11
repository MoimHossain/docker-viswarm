
var sizes = [
    'Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB'
];

module.exports = function(size, nospace, one, places) {
    var mysize, f;
    places = places || 1;

    sizes.forEach(function(f, id) {
        if (one) {
            f = f.slice(0, 1);
        }
        var s = Math.pow(1024, id),
            fixed;
        if (size >= s) {
            fixed = String((size / s).toFixed(places));
            if (fixed.indexOf('.0') === fixed.length - 2) {
                fixed = fixed.slice(0, -2);
            }
            mysize = fixed + (nospace ? '' : ' ') + f;
        }
    });

    // zero handling
    // always prints in Bytes
    if (!mysize) {
        f = (one ? sizes[0].slice(0, 1) : sizes[0]);
        mysize = '0' + (nospace ? '' : ' ') + f;
    }

    return mysize;
};