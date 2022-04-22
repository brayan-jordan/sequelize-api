const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.findAllPeoplesWhereActive)
router.get('/pessoas/all', PessoaController.findAllPeoples)
router.get('/pessoas/:id', PessoaController.findById)
router.post('/pessoas', PessoaController.createPeople)
router.put('/pessoas/:id', PessoaController.updatePeople)
router.delete('/pessoas/:id', PessoaController.deleteById)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

module.exports = router