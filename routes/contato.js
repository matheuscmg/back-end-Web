const express = require('express');
const router = express.Router();

const { insereContato } = require("../models/contato");

router.post('/', (req, res) => {
    const { nome, fone, email, assunto } = req.body;

    insereContato(nome, fone, email, assunto).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

module.exports = router;