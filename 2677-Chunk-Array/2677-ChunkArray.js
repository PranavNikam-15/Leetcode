/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        let array = arr.slice(i, i + size);
        chunkedArray.push(array);
    }
    return chunkedArray;
};