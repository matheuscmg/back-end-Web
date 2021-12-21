// const express = require("express")
// const session = require('express-session');
// const bodyParser = require('body-parser');


// var path = require('path');
// const app = express();

// let nomeContato;
// let foneContato;
// let emailContato;
// let opiniaoContato;



// app.use(session({ secret: 'dsadasdsdsa121' }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use('/public', express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, '/views'));


// app.post('/contato', (req, res) => {
//     /*console.log(req.body.nome);
//     console.log(req.body.fone);
//     console.log(req.body.email);
//     console.log(req.body.opiniao);*/

//     nomeContato = req.body.nome;
//     foneContato = req.body.fone;
//     emailContato = req.body.email;
//     opiniaoContato = req.body.opiniao;

//     insereContato(nomeContato, foneContato, emailContato, opiniaoContato);
    
// });

// app.post('/login', (req, res) => {
//     // console.log(req.body.email);
//     // console.log(req.body.nome);
//     // console.log(req.body.senha);
//     // console.log(req.body.emailLogin)
//     // console.log(req.body.senhaLogin)

//     insereCadastro(req.body.email, req.body.nome, req.body.senha);
//     verificaLogin(req.body.emailLogin, req.body.senhaLogin)
// })


// app.get('/login', (req, res) => {
//     res.render('login')
// })


// async function verificaLogin(email, senha){

//     const sql = 'SELECT *FROM CADASTROS;';
//     let encontro = 0;

//     connection.query(sql, function(err, result){

//         for(i=0; i<result.length; i++){

//             if(result[i].EMAIL == email && result[i].SENHA == senha){
//                 console.log('CARA LOGADO')
//                 encontro++;
//             } 
            
//         }
//         if(!encontro){
//             console.log("nao existeeeee")
//         }
        

//     })

// }

// async function insereCadastro(email, nome, senha) {

//     const sql = 'INSERT INTO CADASTROS(email,nome,senha) VALUES (?,?,?);';
//     const values = [email, nome, senha];

//     connection.query(sql, values, function(err, result) {
//         if (!err) {
//             console.log("Inseriu corretamente ao cadastro");

//         } else console.log("Usuário existente");

//     })
// }


// async function insereContato(name, fone, email, opiniao) {

//     const sql = 'INSERT INTO CONTATO(nome,fone,email,assunto) VALUES (?,?,?,?);';
//     const values = [name, fone, email, opiniao];

//     connection.query(sql, values, function(err, result) {
//         if (!err) {
//             console.log("Inseriu corretamente ao contato");

//         } else console.log("Erro ao inserir anta");

//     })
// }



// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'seu_nome',
//     password: 'sua_senha',
//     database: 'nome_do_seu_banco'
// });



// //tratamento de erro pra se conectar no banco
// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected com id ' + connection.threadId);
// });

// // pegando dados do banco de dados


// // TUDO QUE ESTA COMENTANDO ABAIXO NAO TA FUNCIONANDO
// // inserindo dados no banco de dados
// // let email = document.getElementById('emailLogin').value;
// // let nome = document.getElementById('nomeLogin').value; 
// // let senha = document.getElementById('senhaLogin').value;

// // async function pegarUsuario(){

// //     await connection.query(`INSERT INTO cadastros(email, nome, senha) VALUES (${email}, ${nome}, ${senha})`, function(err, result){
// //         if(!err){
// //             console.log('Usuario inserido com sucesso')
// //         } else{
// //             console.log('Erro ao cadastro usuario')
// //         }
// //     })

// // }

// // pegarUsuario();

// app.use(express.static('tela-login'))
// app.use(express.static('tela-inicial'))
// app.use(express.static('tela-contato'))
// app.use(express.static('tela-livros'))
// app.use(express.static('tela-videos'))
// app.use(express.static('tela-contato'))
// app.use(express.static('tela-sobre-nos'))


// //rota tela login
// app.get("/login", function(req, res) {
//     res.sendFile(__dirname + "/tela-login/index.html")
// })

// //rota tela inicial
// app.get("/inicial", function(req, res) {
//     res.sendFile(__dirname + "/tela-inicial/index.html")
// })

// //rota tela contato
// app.get("/contato", function(req, res) {
//     res.sendFile(__dirname + "/tela-contato/index.html")
// })

// //rota tela livros
// app.get("/livros", function(req, res) {
//     res.sendFile(__dirname + "/tela-livros/index.html")
// })

// //rota tela videos
// app.get("/videos", function(req, res) {
//     res.sendFile(__dirname + "/tela-videos/index.html")
// })

// //rota tela contato
// app.get("/contato", function(req, res) {
//     res.sendFile(__dirname + "/tela-contato/index.html")
// })

// //rota tela sobre nos
// app.get("/sobre", function(req, res) {
//     res.sendFile(__dirname + "/tela-sobre-nos/index.html")
// })


// app.listen(8081, function() {
//     console.log("Servidor Online!")
// });