const Connection = require('../infra/mysqlConnection');


async function trocaSenha(email, senha) {

    const sql = 'UPDATE CADASTROS SET SENHA=? WHERE EMAIL=?';
    values = [senha, email]

    Connection.query(sql, values, function(err, result) {
        if (!err) {
            console.log("Alterou a senha com sucesso!");

        } else console.log("Erro ao alterar senha!");

    })
}

module.exports = {
    trocaSenha
}