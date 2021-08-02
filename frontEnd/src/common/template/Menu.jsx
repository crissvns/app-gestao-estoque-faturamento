import React from "react"
import { Link } from "react-router-dom"

export default (props) => {

    return (
        <ul className='sidebar-menu'>
            <li>
                {/* <a href='#'><i className='fa fa-dashboard'></i> <span>Painel de Controle</span></a> */}
                <Link to='/'>
                    <i className='fa fa-dashboard'></i> <span>Painel de Controle</span>
                </Link>
            </li>
            <li>
                {/* <a href='#'><i className='fa fa-users'></i> <span>Perfil de Usuários</span></a> */}
                <Link to='/groupUsers'>
                    <i className='fa fa-users'></i> <span>Perfil de Usuários</span>
                </Link>
            </li>
        </ul>
    )

}