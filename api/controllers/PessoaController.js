const database = require('../models')

class PessoaController {
    static async findAllPeoples(req, res) {
        try {
            const allPeoples = await database.Pessoas.findAll()
            return res.status(200).json(allPeoples)
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    static async findById(req, res) {
        const { id } = req.params
        try {
            const people = await database.Pessoas.findOne({
                where: {
                    id: id
                }
            })
            return res.status(200).json(people)
        } catch (err) {
            return res.status(500).json({ err: err.message })
        }
    }

    static async createPeople(req, res) {
        const newPeople = req.body
        try {
            const createdNewPeople = await database.Pessoas.create(newPeople)
            return res.status(200).json(createdNewPeople)
        } catch (err) {
            return res.status(500).json({ err: err.message })
        }
    }

    static async updatePeople(req, res) {
        const infosToEdit = req.body
        const { id } = req.params
        try {
            await database.Pessoas.update(
                infosToEdit,
                {
                    where: {
                        id: id
                    }
                }
            )

            const people = await database.Pessoas.findOne({
                where: {
                    id: id
                }
            })

            return res.status(200).json(people)
        } catch (err) {
            return res.status(500).json({ err: err.message })
        }
    }

    static async deleteById(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({ mensagem: `Id ${id} deletado com sucesso`})
        } catch (err) {
            return res.status(500).json({ err: err.message })
        }
    }
}

module.exports = PessoaController