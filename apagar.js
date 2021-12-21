const Connection = require('../infra/mysqlConnection');

async function apagaConta(email, senha) {

    const sql = 'DELETE FROM CADASTROS WHERE EMAIL=?';
    values = [email, senha]

    Connection.query(sql, values, function(err, result) {
        if (!err) {
            console.log("Cadastro apagado com sucesso!");

        } else console.log("Erro ao apagar cadastro!");

    })
}

module.exports = {
    apagaConta
}