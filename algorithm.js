//Algoritmo de validação e leitura do Boleto

function validador(linhaDigitavel) {

    linhaDigitavel = linhaDigitavel.replace(/([ ]+|[.]+)/g, "");

    if (linhaDigitavel.length > 48 || linhaDigitada.length < 47) {
        return console.log("Linha digitável inválida")

    } if (linhaDigitavel.length == 47) {
        //caso Título Bancário

        const valorBoleto = linhaDigitavel.substring(38);
        const vencimentoBoleto = new Date(97, 7, 10 + Number(linhaDigitavel.substring(34,38)));
        const codigoDeBarras = linhaDigitavel.substring(1,5).concat(linhaDigitavel.substring(33), linhaDigitavel.substring(5,10), linhaDigitavel.substring(11,21), linhaDigitavel.substring(22,32));

        return console.log(
            "Linha digitável válida",
            `O valor do boleto é: ${valorBoleto}.`,
            `A data de vencimento do boleto é: ${vencimentoBoleto}.`,
            `Os dígitos correspondentes ao Código de Barras são: ${codigoDeBarras}.`,
        );

    };
        //caso Pagamentos de concessionárias

        console.log("Linha digitável válida");

        const valorBoleto = ;
        const vencimentoBoleto = linhaDigitavel.substring(25,33);
        const codigoDeBarras = linhaDigitavel.substring(1, 12).concat(linhaDigitavel.substring(13,24), linhaDigitavel.substring(25,36), linhaDigitavel.substring(37,48));

        return console.log(
            "Linha digitável válida",
            `O valor do boleto é: ${valorBoleto}.`,
            `A data de vencimento do boleto é: ${vencimentoBoleto}.`,
            `Os dígitos correspondentes ao Código de Barras são: ${codigoDeBarras}.`,
        );

}