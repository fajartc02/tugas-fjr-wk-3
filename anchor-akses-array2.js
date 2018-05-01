function dataHandling(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    var data = 'Nomor ID: ' + input[num1][num2] + '\n' + 'Nama: ' + input[num3][num4] + ('\n') + 'TTL: ' + input[num5][num6] + ' ' + input[num7][num8] + '\n' + 'Hobi: ' + input[num9][num10] + '\n';
              return data;
}
console.log(dataHandling(0, 0, 0, 1, 0, 2, 0, 3, 0, 4));
console.log(dataHandling(1, 0, 1, 1, 1, 2, 1, 3, 1, 4));
console.log(dataHandling(2, 0, 2, 1, 2, 2, 2, 3, 2, 4));
console.log(dataHandling(3, 0, 3, 1, 3, 2, 3, 3, 3, 4));
