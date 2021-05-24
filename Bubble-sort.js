const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let temp = 0
  for (j=0;j<array.length-1;j++){

  for (i=0;i<array.length-1;i++){
    if (array[i]>array[i+1]){
      temp = array[i]
      array[i] = array[i+1]
      array[i+1] = temp 
      
    }
  }
  }

}

bubbleSort(numbers);
console.log(numbers);
