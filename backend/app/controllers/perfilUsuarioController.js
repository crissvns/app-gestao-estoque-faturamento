const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

module.exports = (application) => {

    router.get("/", (req, res) => {
        try {
            let model = application.app.models.perfilUsuarioModel
            
            model.readAll((perfisUsuario) => {
                res.send(perfisUsuario)
            })
        }
        catch (e) {
            res.statusCode = 505
            res.send(e)
        }
    })

    router.get("/:id", (req, res) => {
        try {
            let model = application.app.models.perfilUsuarioModel

            model.readOnlyOne(req.params.id, (perfilUsuario) => {
                res.send(perfilUsuario)
            })
        }
        catch (e) {
            res.statusCode = 505
            res.send(e)
        }
    })

    router.post("/", (req, res) => {
        try {
            let model = application.app.models.perfilUsuarioModel

            let perfilUsuario = req.body

            model.create(perfilUsuario, (createdPerfilUsuario) => {
                res.send({ 
                    message: "Perfil de Usuário criado com sucesso", 
                    createdPerfilUsuario: createdPerfilUsuario 
                })
            })
        }
        catch (e) {
            res.statusCode = 505
            res.send(e)
        }    
    })

    router.put("/:id", (req, res) => {
        try {
            let model = application.app.models.perfilUsuarioModel

            model.update(req.params.id, req.body, (updatedPerfilUsuario) => {
                res.send(updatedPerfilUsuario)
            })
        }
        catch (e) {
            res.statusCode = 505
            res.send(e)
        }
    })

    router.delete("/:id", (req, res) => {
        try {
            let model = application.app.models.perfilUsuarioModel
            
            model.delete(req.params.id, (removedPerfilUsuario) => {
                res.send({ 
                    message: "Perfil de Usuário removido com sucesso",
                    removedPerfilUsuario: removedPerfilUsuario
                })
            })
        }
        catch (e) {
            res.statusCode = 505
            res.send(e)
        }
    })

    application.use("/api/perfilUsuario", router)
}