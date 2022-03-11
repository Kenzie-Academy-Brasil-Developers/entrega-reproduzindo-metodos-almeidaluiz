// exemplo da lógica descrição da entrega

function nomeDaFuncao(array, callback) {
    // conteúdo da função
}

const letras = ['a', 'b', 'c', 'd', 'e']

const numeros = [1, 2, 3, 5, 7]


function newForEach(array, callback) {
    for (let contador = 0; contador < array.length; contador++) {
        const letraAtual = array[contador];
        callback(letraAtual, contador, array);
    }
}

newForEach(letras, function(letraAtual, contador, array) {
    console.log(letraAtual);
});


function newMap(array, callback) {
    let triplo = numeros.map(function(num) {
        return num * 3;
        callback(triplo, array)
    });
}

newMap(numeros, function(triplo, array) {
    console.log(triplo);
});



function newFilter(array, callback) {
    let filtrado = numeros.filter((ehMaiorQue) => {
        numeros >= 3;
        callback(filtrado, array)
    });
}

newFilter(numeros, function(filtrado, array) {
    console.log(filtrado);
});


function newFind(array, callback) {
    let numEncontrado = numeros.find(elem => elem > 5);
    callback(numEncontrado, array);
};

newFind(numeros, function(numEncontrado, array) {
    console.log(numEncontrado);
});



function newFindIndex(array, callback) {

}

function newReduce(array, callback) {

}

function newSome(array, callback) {

}

function newEvery(array, callback) {

}

function newFill(array, callback) {

}

function newIncludes(array, callback) {

}

function newIndexOf(array, callback) {

}

function newConcat(array, callback) {

}

function newJoin(array, callback) {

}