const bodyParser = require('body-parser')
const routePessoas = require('./routePessoas')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(routePessoas)
    app.get('/', (req, res) => {
        res.send('ola')
    })
}