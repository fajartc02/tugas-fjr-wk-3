function balikString(word) {
    var arr = word.split('');
    
    var lengthWord = arr.length - 1;
        var container = '';
        for(var j = lengthWord; j >= 0; j--) {
            container += arr[j] 
        }
    return container;
}

console.log(balikString('hello world!'));