const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.findAllPeoples)
router.get('/pessoas/:id', PessoaController.findById)
router.post('/pessoas', PessoaController.createPeople)
router.put('/pessoas/:id', PessoaController.updatePeople)
router.delete('/pessoas/:id', PessoaController.deleteById)

module.exports = router