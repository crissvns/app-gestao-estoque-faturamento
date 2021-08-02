import "../common/template/dependecies"
import React from "react"

import { HashRouter } from "react-router-dom"

import Header from "../common/template/Header"
import Sidebar from "../common/template/Sidebar"
import Footer from "../common/template/Footer"
import Routes from "./Routes"

export default (props) => {

    return (
        <HashRouter>
            <div className='wrapper'>
                <Header />
                <Sidebar />
                <Routes />
                <Footer />
            </div>
        </HashRouter>
    )

}