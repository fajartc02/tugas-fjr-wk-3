function palindrome(kata) {
    // you can only write your code here!
    var lengKata = kata.length - 1 ; 
    var container = '';
    var state;
    for ( var i = 0; i <= lengKata; i++) {
        container = container + kata[i]
    }
    container2 = ''
    for (var j = lengKata; j >= 0; j--){
        var container2 = container2 + kata[j]
    }
    if ( container === container2) {
        state = true;
    } else {
        state = false;
    }
    return state;
}
//   }
//   console.log(container)
//   console.log(container2)
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false