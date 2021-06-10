//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
  let i = 1
  let a = []
  if(parseInt(arr[0])<parseInt(arr[1])){
    for(let i=arr[0];i<=arr[1];i++){
      a.push(i)
    }
  } else{
  for(let i=arr[1];i<=arr[0];i++){
      a.push(i)
    }
  }
  let mx = a.reduce((acc,b)=>acc*b)
  // console.log(mx)
  // console.log(a)
  
  while(i<mx){
    let c = a.filter(x=>i%x==0)
    // console.log(c.length==a.length)
    if(c.length==a.length){
      console.log(i)
      return i
    }
    i++
  }
  return i;
}


smallestCommons([1,5]);
