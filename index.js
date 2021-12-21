const express = require("express")
const app = express();
const cors = require('cors');

const RotaCadastro = require('./routes/cadastro');
const RotaContato = require('./routes/contato');
const RotaAjustes = require('./routes/ajustes');
const RotaApagar = require('./routes/apagar');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

app.use("/cadastro", RotaCadastro);
app.use("/contato", RotaContato);
app.use("/ajustes", RotaAjustes);
app.use("/apagar", RotaApagar);

const PORT = process.env.PORT || 8081;
app.listen(PORT, function() {
    console.log("Servidor Online!")
});