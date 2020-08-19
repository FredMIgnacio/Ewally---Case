const bill = require('../controllers/bill');

module.exports = function(app, db) {
    app.post('/bill', (req, res) => {
        if (!req.body.linhaDigitavel || typeof req.body.linhaDigitavel != "string")
        res.send({
            message: "Linha Digitável é obrigatória e precisa ser uma String.",
        })
        const result = bill.validator(req.body.linhaDigitavel)
        res.send(result)
    });
};
