function balikString(word) {
    var arr = word.split('');
    
    var lengthWord = arr.length - 1;
    // for (var i = 0; i <= 1; i++) {
    //     var container = '';
        for(var j = lengthWord; j >= 0; j--) {
            var container = word[j] + ''
        }
    }
    return container;
}

console.log(balikString('hello world!'));