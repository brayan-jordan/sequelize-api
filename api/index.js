const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const app = express()

app.use(bodyParser.json())

app.get('/teste', (req, res) => {
    res.status(200)
    res.send({mensagem: 'Teste route'})
})

app.listen(port, () => console.log(`Server is running on port ${port}`))

module.exports = app