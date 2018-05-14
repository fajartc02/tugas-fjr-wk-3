function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO;
    var indexX = [];
    var lengArr = arr.length
    for (var i = 0; i < lengArr; i++) {
      var arrBaru = arr[i];
      // console.log(arrBaru);
      if (arrBaru === 'o') {
        indexO = i; //hasilnya 2
      } else if (arrBaru === 'x') {
        var indX = i
        indexX.push(indX)
        // console.log(indX)//hasilnya 5, 7
      } 
    }
    // console.log(indexO) // 2
    // console.log(indexX) // [5, 7]
    var containArr = []
    for ( var j = 0; j < indexX.length; j++) {
      var jaraknya;
      if ( indexX[j] < indexO) {
        jaraknya = indexO - indexX[j]
      } else {
        jaraknya = indexX[j] - indexO
      }
      containArr.push(jaraknya)
    }
    containArr.sort(function (a, b){
      return a > b;
    })
    console.log(containArr)
    // var arr1 = Number(containArr);
    // console.log(arr1)
    // statement for return value of jarak X to O
    if ( containArr.length < 1) {
      return 0
    } else {
      var dekat = containArr[0]
      return dekat
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2