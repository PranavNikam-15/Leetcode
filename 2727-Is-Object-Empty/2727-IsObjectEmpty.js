/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return (Object.values(obj).length === 0) ? true : false;
};