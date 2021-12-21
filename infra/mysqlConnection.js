const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '32211777',
    database: 'trabalhopucc'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + nodemcerr.stack);
        return;
    }

    console.log('MySQL Running ID : ' + connection.threadId);
});

module.exports = connection;