import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import ContentHeader from "../common/template/ContentHeader"
import Content from "../common/template/Content"

const BASE_URL = "http://localhost:3000/api"

class AddGroupUsers extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: "", descricao: "" }

        if (this.props.location.state) {
            const { id } = this.props.location.state

            if (id) {
                axios.get(`${BASE_URL}/perfilusuario/${id}`)
                    .then(resp => this.setState({
                        nome: resp.data.nome,
                        descricao: resp.data.descricao
                    }))
                    .catch(error => console.error(error))
            }
        }

        this.setNome = this.setNome.bind(this)
        this.setDescricao = this.setDescricao.bind(this)
        this.salvarGrupoUsuario = this.salvarGrupoUsuario.bind(this)
    }

    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }

    setDescricao(e) {
        this.setState({
            descricao: e.target.value
        })
    }

    salvarGrupoUsuario() {
        let updateID = null;
        if (this.props.location.state) {
            const { id } = this.props.location.state

            if (id) {
                updateID = id
            }
        }

        if (updateID) {
            axios.put(`${BASE_URL}/perfilusuario/${updateID}`, {
                nome: this.state.nome,
                descricao: this.state.descricao
            })
                .then(resp => this.props.history.push("groupUsers", null))
                .catch(error => console.error(error))
        }
        else {
            axios.post(`${BASE_URL}/perfilusuario`, {
                nome: this.state.nome,
                descricao: this.state.descricao
            })
                .then(resp => this.props.history.push("groupUsers", null))
                .catch(error => console.error(error))
        }
    }

    render() {
        return (
            <div>
                <ContentHeader title="Adicionar/Editar Perfis de Usuário" small="Adição ou edição dos perfis de usuário do sistema" />
                <Content>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" className="form-control" value={this.state.nome}
                                    onChange={this.setNome}
                                    placeholder="digite aqui o nome do perfil de usuário..." />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição</label>
                                <textarea className="form-control" value={this.state.descricao}
                                    onChange={this.setDescricao}
                                    placeholder="digite a descrição do perfil de usuário..." />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ float: "right" }}>
                                <Link to="/groupUsers" className="btn btn-default" style={{ margin: "5px" }}>
                                    Cancelar
                                </Link>
                                <button type="button" className="btn btn-primary"
                                    style={{ margin: "5px" }}
                                    onClick={this.salvarGrupoUsuario}>
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}

export default AddGroupUsers