const perform = (array) => {
  var count = 1
  var higher = array[array.length - 1]
  for (var i = array.length - 2; i >= 0; i--) {
    if (array[i] > higher) {
      higher = array[i]
      count +=1
    }
  }
  console.log(count)
}


var array = [3, 7, 8, 3, 6, 1]
var array2 = [1, 4, 5, 8]
var array3 = [9, 5, 4, 6, 3, 2, 1]


perform(array)
perform(array2)
perform(array3)