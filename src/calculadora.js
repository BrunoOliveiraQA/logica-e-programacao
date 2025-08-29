function somarDoisNumeros(n1, n2){

    const resultado = n1 + n2;

    return resultado;

}


function calcularMediaDeDoisNumeros(n1, n2){

    const resultadoSomaDeDoisValores = somarDoisNumeros(n1, n2);

    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

    return resultadoDaMediaDeDoisValores;

}


module.exports = {
    somarDoisNumeros
}