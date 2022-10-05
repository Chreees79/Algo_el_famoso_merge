const sum = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j < array.length - i; j++) {
      if ( array[i] + array[j] === sum){
        return true;
      } else {
        return false;
      }
    }
  }
}
var array = [1, 8, 10 , 21]
var k = 9
console.log(sum(array, k))