const Connection = require('../infra/mysqlConnection');

async function verificaLogin(email, senha){
    const sql = 'SELECT * FROM CADASTROS WHERE EMAIL = ?;';

    const result = await Connection.promise().query(sql, email);

    if(result[0].length < 0){
        console.log("Usuario nao encontrado")
        throw Error("Usuario e senha nao estao corretos");
    }
    else{
        if(result[0][0].SENHA === senha){
            console.log('CARA LOGADO')
            result[0][0].SENHA = null;
            return result[0][0];
        }
        else{
            console.log("Senha incorreta")
            throw Error("Usuario e senha nao estao corretos");
        }
    }
}

async function insereCadastro(email, nome, senha) {
    const sql = 'INSERT INTO CADASTROS(email,nome,senha) VALUES (?,?,?);';
    const values = [email, nome, senha];

    Connection.query(sql, values, function(err, result) {
        if (!err) {
            console.log("Inseriu corretamente ao cadastro");
            return 1;

        } else{ 
            console.log("Usuário existente");
            return 0;
         }
        

    })
}

module.exports = {
    verificaLogin,
    insereCadastro
}
