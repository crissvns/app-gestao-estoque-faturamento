import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Dashboard from "../dashboard/Dashboard"
import GroupUsers from "../security/GroupUsers"
import AddGroupUsers from "../security/AddGroupUsers"

export default (props) => {

    return (
        <div className='content-wrapper'>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/groupUsers' component={GroupUsers} />
                <Route path='/addGroupUsers' component={AddGroupUsers} />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )

}