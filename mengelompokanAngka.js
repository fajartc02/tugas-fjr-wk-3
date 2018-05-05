function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var containArr1 = []
    var containArr2 = []
    var containArr3 = []
    var totalArr = []
    for (var i = 0; i < arr.length; i++) { // looping for display all Array
      if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) { // conditional angka genap AND bukan angka yang habis dibagi 3
        containArr1.push(arr[i])
      } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) { // conditional angka ganji AND tidak habis dibagi 3
        containArr2.push(arr[i])
      } else if (arr[i] % 3 === 0) { // conditional angka yang habis dibagi 3
        containArr3.push(arr[i])
      }
      // console.log(arr[i])   
    }
    totalArr.push(containArr1, containArr2, containArr3)
      // console.log(containArr1)
      // console.log(containArr2)
      // console.log(containArr3)
      console.log(totalArr)
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]