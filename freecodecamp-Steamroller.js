//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {
  let r = []
  function recur(nay){
    nay.forEach(a=>Array.isArray(a)?recur(a):r.push(a))
    }
    recur(arr)

    console.log(r)
    return r
}

steamrollArray([1, [2], [3, [[4]]]]);
