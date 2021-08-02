import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import ContentHeader from "../common/template/ContentHeader"
import Content from "../common/template/Content"

const BASE_URL = "http://localhost:3000/api"

class GroupUsers extends Component {

    constructor(props) {
        super(props)

        this.state = { dados: [] }

        this.getData = this.getData.bind(this)
        this.editaRegistro = this.editaRegistro.bind(this)
        this.apagaRegistro = this.apagaRegistro.bind(this)

        this.getData()
    }

    getData() {
        axios.get(`${BASE_URL}/perfilUsuario`)
            .then(resp => this.setState({ dados: resp.data }))
            .catch(error => {
                console.error(error)
            })
    }

    editaRegistro(id) {
        this.props.history.push({
            pathname: "/addGroupUsers",
            state: { id: id }
        })
    }

    apagaRegistro(id) {
        let _confirm = confirm("Tem certeza que deseja apagar este registro?")

        if (_confirm) {
            axios.delete(`${BASE_URL}/perfilUsuario/${id}`)
                .then(resp => this.getData())
                .catch(error => console.error(error))
        }
    }

    render() {
        return (
            <div>
                <ContentHeader title="Perfis de Usuários" small="Perfis de usuários do sistema para definição de controles de acesso" />
                <Content>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ float: "right" }}>
                                <Link to='/addGroupUsers' className="btn btn-primary">
                                    <i className="fa fa-plus"></i> Adicionar Perfil de Usuário
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th style={{ width: "50px"}}></th>
                                            <th style={{ width: "50px"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.dados.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{item.nome}</td>
                                                        <td>{item.descricao}</td>
                                                        <td style={{ width: "50px"}}>
                                                            <button type="button"
                                                                onClick={() => this.editaRegistro(item._id)}
                                                                className="btn btn-primary">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                        </td>
                                                        <td style={{ width: "50px"}}>
                                                            <button type="button"
                                                                onClick={() => this.apagaRegistro(item._id)}
                                                                className="btn btn-danger">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Content>
            </div >
        )
    }
}

export default GroupUsers