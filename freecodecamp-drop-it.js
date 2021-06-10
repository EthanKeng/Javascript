//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
  for (let i in arr){
    if (func(arr[i])){
      return arr.slice(i)
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
