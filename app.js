const express = require (' express ');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Página inicial</h1>');
});

app.get('/sobre', (req, res) => {
    res.send('<h1>Página sobre nós</h1>')
})

app.get('/contato', (req, res) => {
    res.send('<h1>Página de contato</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});