import React from "react"

export default (props) => {
    return (
        <header className='main-header'>
            <a href='#' className='logo'>
                <span className='logo-mini'><b>GEF</b></span>
                <span className='logo-lg'>
                    <i className='fa fa-map'></i> GEF
                </span>
            </a>
            <nav className='navbar navbar-static-top'>
                <a href='#' className='sidebar-toggle' data-toggle='offcanvas'> </a>
            </nav>
        </header>
    )
}