/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArry = [];
    arr.forEach((element, index)=>{
        returnedArry.push(fn(element, index));
    });
    return returnedArry;
};