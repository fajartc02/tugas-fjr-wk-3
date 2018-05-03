function pasanganTerbesar(num) {
    // you can only write your code here!
    var strNum = String(num);
    var arr = [];
    var lengNum = strNum.length - 2 // banyak strNum = 6 index dimulai dari 0
    for ( var i = 0; i <= lengNum; i++ ) {
      var double = strNum[i] + strNum[i + 1]
      arr.push(double)
    }
    arr.sort(function (a, b) {
      return a < b
    })
    var pasanganBesar = arr[0]
    return parseInt(pasanganBesar)
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99