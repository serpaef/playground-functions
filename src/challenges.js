// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
    return true;
  }
  else {
    return false;
  };
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  // usei nesse código as informações do blog da trybe:
  // https://blog.betrybe.com/javascript/javascript-split/
  let arrStr = str.split(' ');
  return arrStr;
}

// Desafio 4
function concatName(str) {
  // seu código aqui
  let arrStrSolved = str[str.length -1] + ', ' + str[0];
  return  arrStrSolved;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let ord = arr;
  let count = 0
  for (let n2 = 1; n2 < ord.length; n2 +=1) {
    for (let n1 = 0; n1 < ord.length; n1 += 1) {
      if(ord[n2] > ord[n1]) {
        let aux = ord[n1];
        ord[n1] = ord[n2];
        ord[n2] = aux;
      }
    }
  }
  for (let index = 0; index < arr.length; index +=1){
    if (ord[0] === arr[index]){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Dist = cat1 - mouse;
  let cat2Dist = cat2 - mouse;
  if(cat1Dist < 0) {
    cat1Dist *= -1;
  }
  if(cat2Dist < 0) {
    cat2Dist *= -1
  }
  if(cat1Dist === cat2Dist) {
    return 'os gatos trombam e o rato foge';
  }
  else if(cat1Dist < cat2Dist) {
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
