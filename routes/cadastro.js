const express = require('express');
const router = express.Router();

const { insereCadastro, verificaLogin } = require("../models/cadastro");

router.post('/login', async(req, res) => {
    const { email, senha } = req.body;

    verificaLogin(email, senha).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

router.post('/cadastro', (req, res) => {
    const { email, nome, senha } = req.body;

    insereCadastro(email, nome, senha).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

module.exports = router;