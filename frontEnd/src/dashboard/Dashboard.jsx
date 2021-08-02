import React from "react"

import ContentHeader from "../common/template/ContentHeader"
import Content from "../common/template/Content"

export default (props) => {

    return (
        <div>
            <ContentHeader title="Dashboard" small="Painel inicial de Controle" />
            <Content>
                <span>Conteúdo do Dashboard</span>
            </Content>
        </div>
    )

}