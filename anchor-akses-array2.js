function dataHandling(input) {
    var baris = input[0]
    var baris1 = 3
      for (var i = 0 ; i <= baris1 ; i++) {
        var no = ''
        var nama = ''
        var ttl = ''
        var hobi = ''
        no = 'Nomor ID: ' + input[i][0] + '\n'
        nama = 'Nama Lengkap: ' + input[i][1] + '\n'
        ttl = 'TTL: ' + input[i][2] + ' ' + input[i][3] + '\n'
        hobi = 'Hobi: ' + input[i][4] + '\n'
        var data = no + nama + ttl + hobi
        console.log(data)
      }
  
          
  }
  var input = [
      ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
      ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
      ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
      ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
  console.log(dataHandling(input))