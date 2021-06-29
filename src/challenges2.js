// Desafio 10
// precisei buscar uma função que ordenasse o array antes de gerar os objetos
// encontrei esse tutorial:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function techList(arr, name) {
  // seu código aqui
  let orderedArr = arr.sort();
  let objList = [];
  if (orderedArr.length !== 0) {
    for (let t of orderedArr) {
      objList.push({
        tech: t,
        name,
      });
    }
    return objList;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  let cont = 0;
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let n in arr) {
    if (arr[n] < 0 || arr[n] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let n1 = 0; n1 < arr.length; n1 += 1) {
    for (let n2 = 1; n2 < arr.length; n2 += 1) {
      if (arr[n1] === arr[n2]){
        cont += 1;
      }
    }
    if (cont > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont = 0;
  }
  let phone = '('+ arr[0] + arr [1] + ') ' + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9] + arr[10];
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
