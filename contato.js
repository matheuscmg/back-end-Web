const Connection = require('../infra/mysqlConnection');

async function insereContato(name, fone, email, assunto) {
    const sql = 'INSERT INTO CONTATOS(nome,fone,email,assunto) VALUES (?,?,?,?);';
    const values = [name, fone, email, assunto];

    Connection.query(sql, values, function(err, result) {
        if (!err) {
            console.log("Inseriu corretamente ao contato");

        } else console.log("Erro ao inserir anta");

    })
}

module.exports = {
    insereContato
}