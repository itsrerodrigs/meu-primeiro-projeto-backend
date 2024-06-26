const express = require("express")
const router = express.Router ()

const app = express ()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Renata Rodrigues',
        imagem: 'https://bit.ly/3VIxPHG',
        minibio: 'Jornalista'
    })
}

function mostraPorta() {
    console.log ('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)