/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   let filteredArr = [];
   arr.forEach((num, index)=>{
       if(fn(num, index)) {
          filteredArr.push(num);
       }
   }); 
   return filteredArr;
};