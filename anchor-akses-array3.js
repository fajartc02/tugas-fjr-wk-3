function dataHandling2(input) {
    var arr = input;
    arr.splice(1, 2, "Rohman Alamsyah Elsharawy", "Provinsi Bandar Lampung") + arr.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(arr)
    var sliceArr = arr.slice(3,4) + ''
    // var sliceArr1 = sliceArr.
    var splitArr = sliceArr.split('/')
    // console.log(sliceArr1)
    var arr1 = splitArr.slice(1,2) + ''
        switch (arr1) {
        case '01':
        console.log('Januari');
        break;
        case '02':
        console.log('Februari');
        break;
        case '03':
        console.log('Maret');
        break;
        case '04':
        console.log('April');
        break;
        case '05':
        console.log('Mei');
        break;
        case '06':
        console.log('Juni');
        break;
        case '07':
        console.log('Juli');
        break;
        case '08':
        console.log('Agustus');
        break;
        case '09':
        console.log('September ');
        break;
        case '10':
        console.log('Oktober');
        break;
        case '11':
        console.log('November');
        break;
        case '12':
        console.log('Desember');
        break;
        default:
    }
    // console.log(splitArr)
    // var arr2 = splitArr + ''
    var splitArr2 = splitArr.join('-')
    var splitArr1 = splitArr.sort(function(value1, value2){return parseInt(value1) < parseInt(value2)}) // dari string menjadi integer
    console.log(splitArr1)
    console.log(splitArr2)
    var sliceArr2 = arr.slice(1, 2) +''
    var splitArr3 = sliceArr2.split('')
    var sliceArr3 = splitArr3.slice(0, 15).join('')

    console.log(sliceArr3)
    // var subStrArr = sliceArr2.substr(0, 15)
    // console.log(subStrArr)
}
var input = dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]);