function perkalianUnik(arr) {
  // you can only write your code here!
  var lengArr = arr.length - 1
  var hasilKali = [];
  for (var i = 0; i <= lengArr; i++) {
    //mengambil array baru menggunakan slice
    var arrBaru = arr.slice() 
    var spliceArr = arrBaru.splice(i, 1)
    var numArr = Number(spliceArr);
  var hasil = 1 // disimpan di luar looping bawah agar tidak di kosongkan lagi oleh looping
    for (var j = 0; j <= arrBaru.length - 1; j++) {
      //array menggunakan []
      hasil *= arrBaru[j] 
    }
      hasilKali.push(hasil)
  }
  return hasilKali

}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]