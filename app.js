const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Página inicial alterado men</h1>');
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Página sobre nós</h1>')
})

app.get('/contato', (req, res) => {
    res.send('<h1>Página de contato</h1>');
});

app.listen(process.env.PORT ?? 3000, function (erro) {  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})