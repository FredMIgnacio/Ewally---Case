//Algoritmo de validação e leitura do Boleto
const digitValidator = require("../helper/digitValidation");

function validator(linhaDigitavel) {

    linhaDigitavel = linhaDigitavel.replace(/([ ]+|[.]+)/g, "");

    if (!/^[0-9]*$/g.test(linhaDigitavel)) {
        return {
            message: "Linha digitável precisa consistir apenas de números, pontos e espaços."
        }
    }

    if (linhaDigitavel.length > 48 || linhaDigitadavel.length < 47) {
        return {
            message: "Linha digitável invalida",
        };

    } if (linhaDigitavel.length == 47) {
        //caso Título Bancário

        const billBarcode = linhaDigitavel.substring(0, 4).concat(linhaDigitavel.substring(32), linhaDigitavel.substring(4, 9), linhaDigitavel.substring(10, 20), linhaDigitavel.substring(21, 31));
        
        //criar os blocos a partir da linha digitavel
        const blocks = [],
            let validBlocks = 0;
        blocks.forEach(block => {
            if (!digitValidator.validate10(block, block[block.length - 1])) {
                return {
                    message: "Linha digitável invalida",
                }
            }
        })
        
        // generalValidate11 com o digito 4
        //se for false, retorno invalido

        const billValue = parseFloat(`${linhaDigitavel.substring(37, 45)}.${linhaDigitavel.substring(45)}`);
        const billDeadline = new Date(97, 9, 7 + Number(linhaDigitavel.substring(33, 37))).toLocaleDateString;

        return {
            message: "Linha digitável válida",
            value: billValue,
            deadline: billDeadline,
            barcode: billBarcode,
        };
    };

    //caso Pagamentos de concessionárias

    const billBarcode = linhaDigitavel.substring(0, 11).concat(linhaDigitavel.substring(12, 23), linhaDigitavel.substring(24, 35), linhaDigitavel.substring(36, 47));
    
    //criar os blocos a partir do billBarcode
    
    //verifica se é modulo 10 ou 11
    const blocks = [],
        let validBlocks = 0;
    blocks.forEach(block => {
        //valida pro modulo 10 ou 11
        //se for false, retorna invalido
    }
    })
const billValue = parseFloat(`${linhaDigitavel.substring(38, 46)}.${linhaDigitavel.substring(46)}`);
const billDeadline = new Date(97, 9, 7 + Number(linhaDigitavel.substring(34, 38))).toLocaleDateString;

return {
    message: "Linha digitável válida",
    value: billValue,
    deadline: billDeadline,
    barcode: billBarcode,
};

}

module.exports = { validator };