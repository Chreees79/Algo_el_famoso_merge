const perform = (array) => {
  var count = 1
  for (var i = array.length - 2; i >= 0; i--) {
    if (compare(array, i)) {
      count += 1
    }
  }
  console.log(count)
}

const compare = (array, i) => {
  for (var j = 1; j < array.length - i; j++) {
    if (array[i] < array[i + j]) {
      return false
    }
  }
  return true
} 

var array = [3, 7, 8, 3, 6, 1]
var array2 = [1, 4, 5, 8]
var array3 = [9, 5, 4, 6, 3, 2, 1]


perform(array)
perform(array2)
perform(array3)

/*
function hasView(array) {
  var len = array.length;
  var buildingCount = 1
  for(let i = 0; i < len - 1; i++) {
    let max = i;
    for(let j = i + 1; j < len; j++) {
      if (array[max] <= array[j]) {
        max = j;
      }
    }
    if(max === i) {
      buildingCount++;
    }
  }
  return buildingCount
}*/