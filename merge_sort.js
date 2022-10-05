const fs = require('fs');
const fileName = process.argv[2];

function mergeSort(){
  let count = 0;

  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    const arrayFile = data.split(" ").map((x) => Number.parseInt(x));
  divide(arrayFile);
  console.log(divide(arrayFile));
  });
  divide = (array) => {
    if (array.length < 2) {
      return array
    }
    const middle = Math.floor(array.length/2)
    const arrayLeft = array.slice(0, middle)
    const arrayRight = array.slice(middle)
    return merge(divide(arrayLeft), divide(arrayRight))
  }

  merge = (arrayLeft, arrayRight) => {
  
    const sorted = []
    while(arrayLeft.length && arrayRight.length) {
      count++;
      if (arrayLeft[0] <= arrayRight[0]) {
        sorted.push(arrayLeft.shift())

    
      } else {
        sorted.push(arrayRight.shift())
      }
    }
    while (arrayLeft.length) {
      sorted.push(arrayLeft.shift());
  }
    while (arrayRight.length) {
      sorted.push(arrayRight.shift());
    }
  return sorted; 
  }
}
mergeSort();
