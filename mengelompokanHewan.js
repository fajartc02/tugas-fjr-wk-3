function groupAnimals(animals) {
  // you can only write your code here!
  var hurufAwal = []
  var containerAnimals = []
  var container = []
  //sort animals
  animals.sort(function(value1, value2) {return value1 > value2 });
  //sort one character from index[0]
  for (var i = 0; i < animals.length; i++) {
    hurufAwal.push(animals[i][0])// DISPLAY
  }
  //contain array animals first word index 0 only (take one character if next character same)
  var current = null;
  var counter = 0;
  for (var j = 0; j < animals.length; j++) {
    if (hurufAwal[j] != current) {
      if (counter > 0) {
        container.push(current)
      }
    current = hurufAwal[j];
    counter = 1;
    }
  }
  if (counter > 0) {
    container.push(current)
  }
  // console.log(container) DISPLAY character //['a', 'c', 'k'] 

  // contain new array from character index[0] EQUAL with container.length
  for (var k = 0; k < container.length; k++) {
    containerAnimals.push([])
  }
  // statement for check animals index[0] with container character 
  for (var l = 0; l < animals.length; l++) {
    if (animals[l][0] == container[l]) {
      var inspector = animals[l]
      containerAnimals[l].push(animals[l])
     }
    if (animals[l][0] != animals[l]) {
      for (var m = 1; m< animals.length - 1; m++) {
        if (animals[l][0] == container[l-m]) {
          containerAnimals[l-m].push(animals[l])
        }else if (animals[l][0] == container[l-m]){
          containerAnimals[l-m].push(animals[l])
        } else if (animals[l][0] == container[l-m]) {
          containerAnimals[l-m].push(animals[l])
        }
      }
    }
  }
  return containerAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]