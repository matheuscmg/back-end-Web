const express = require('express');
const router = express.Router();

const { apagaConta } = require("../models/apagar")

router.post('/', (req, res) => {
    const { email, senha } = req.body;

    apagaConta(email, senha).then(result => {
        res.status(200).send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = router;