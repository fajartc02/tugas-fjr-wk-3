function faktorialAngka(num) {
    // you can only write your code here!
    var arrBaru = 1
    var lengNum = num
    for (var i = 1; i <= lengNum; i++) {
        arrBaru *= i
    }
    console.log(arrBaru)
  }
  
  // TEST CASES
  console.log(faktorialAngka(5)); // 9