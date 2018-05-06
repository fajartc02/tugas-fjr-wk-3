function palindromeAngka(num) {
  // var state === true;
  while (true) {
    num++
    var palindrome = ''
    var str = String(num)
    for (var i = str.length - 1; i >= 0; i--) {
      palindrome += str[i];
    }
    // console.log(palindrome)
    // console.log(num)
    if (num == palindrome) {
      false
      return num
    }
  }
}
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
//   console.log(angkaPalindrome(10)); // 11
//   console.log(angkaPalindrome(117)); // 121
//   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001