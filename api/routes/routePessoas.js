const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.findAllPeoples)
router.get('/pessoas/:id', PessoaController.findById)
router.post('/pessoas', PessoaController.createPeople)
router.put('/pessoas/:id', PessoaController.updatePeople)
router.delete('/pessoas/:id', PessoaController.deleteById)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)

module.exports = router