const express = require('express');
const router = express.Router();

const { trocaSenha } = require("../models/ajustes")

router.post('/', (req, res) => {
    const { email, senhaantiga, senha } = req.body;

    trocaSenha(email, senha).then(result => {
        res.status(200).send(result);

    }).catch((e) => {
        res.status(400).send(e);
    });

});


module.exports = router;