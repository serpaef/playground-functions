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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
