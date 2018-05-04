function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var arit = arr[1] - arr[0]
    var state;
    for ( var i = 0; i <= arr.length - 2; i++) {
      var aritArr = arr.slice(i, i + 1);
      var numArr = Number(aritArr)
      // console.log(numArr)
    }
    for (var j = 1; j <= arr.length - 1; j++) {
      var hasilArr = arr.slice(j, j + 1)
      var numHasil = Number(hasilArr);
      // console.log(numHasil)
    } 
    if ( numArr + arit === numHasil ) {
      state = true;
    } else {
      state = false;
    }
    return state
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false