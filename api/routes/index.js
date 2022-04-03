const bodyParser = require('body-parser')
const routePessoas = require('./routePessoas')
const routeNiveis = require('./routeNiveis')
const routeTurmas = require('./routeTurmas')

module.exports = app => {
    app.use(
        bodyParser.json(),
        routePessoas,
        routeNiveis,
        routeTurmas
    )
}
