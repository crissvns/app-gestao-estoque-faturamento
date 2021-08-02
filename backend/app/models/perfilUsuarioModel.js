const mongoose = require("mongoose")
const PerfilUsuarioSchema = new mongoose.Schema({
    nome: String,
    descricao: String
})
const PerfilUsuario = mongoose.model("perfilUsuarios", PerfilUsuarioSchema)

module.exports = () => {

    this.readAll = (callback) => {
        PerfilUsuario.find({}, (err, perfisUsuarios) => {
            if (err) {
                throw err
            } else callback(perfisUsuarios)
        })
    }

    this.readOnlyOne = (id, callback) => {
        PerfilUsuario.findById(id, (err, perfilUsuario) => {
            if (err) {
                throw err
            } else callback(perfilUsuario)
        })
    }

    this.create = (perfilUsuario, callback) => {
        PerfilUsuario.create({
            nome: perfilUsuario.nome,
            descricao: perfilUsuario.descricao
        }, (err, createdPerfilUsuario) => {
            if (err) {
                throw err
            } else callback(createdPerfilUsuario)
        })
    }

    this.update = (id, perfilUsuario, callback) => {
        PerfilUsuario.findByIdAndUpdate(id, perfilUsuario, { new: true, useFindAndModify: true }, (err, updatedPerfilUsuario) => {
            if (err) {
                throw err
            } else callback(updatedPerfilUsuario)
        })
    }

    this.delete = (id, callback) => {
        PerfilUsuario.findByIdAndRemove(id, { useFindAndModify: true }, (err, removedPerfilUsuario) => {
            if (err) {
                throw err
            } else callback(removedPerfilUsuario)
        })
    }

    return this;
}