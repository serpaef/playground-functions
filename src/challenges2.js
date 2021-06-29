// Desafio 10
// precisei buscar uma função que ordenasse o array antes de gerar os objetos
// encontrei esse tutorial:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function techList(arr, name) {
  // seu código aqui
  orderedArr = arr.sort();
  let objList = [];
  if(orderedArr.length !== 0){
    for (t of orderedArr){
      objList.push({
        tech: t,
        name: name,
      })
    }
    return objList;
  }
  return 'Vazio!'
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
