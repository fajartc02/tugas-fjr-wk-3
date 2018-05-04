function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var modArr = arr[1] / arr[0]
  var state;
  // looping yang menampilkan hasil array yang telah di bagi modArr
  for ( var i = 1; i <= arr.length - 1; i++ ) {
    var geo = arr.slice(i, i + 1).join('')
    var hasilArr = parseInt(geo) // hasil statement geometri number
    // console.log('angka numGeo- ' + numGeo) 
  }
  // looping yang menamplikan nilai dari setiap array
  for (var j = 0; j <= arr.length -2 ; j++) {// nilai yang terakhir tidak di ambil (-2)
    var geo1 = arr.slice(j, j + 1).join('')
    var numGeo = parseInt(geo1) // hasil statement geometri number
    // console.log('angka numGeo1- ' + numGeo1)
  }
  if( numGeo * modArr  === hasilArr) {
      state = true
    } else {
      state = false
    }  
   return state
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false