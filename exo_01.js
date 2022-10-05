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
var array2 = [-2, 5, 8, 12, 5, 89]
var k = 9
var k2 = 23
console.log(sum(array, k))
console.log(sum(array2, k2))