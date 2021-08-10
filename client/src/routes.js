import React from "react"
import {Redirect, Route, Switch} from 'react-router-dom'
import AuthPage from "./pages/AuthPage"
import CreatePage from "./pages/CreatePage"
import DetailPage from "./pages/DetailPage"
import LinksPage from "./pages/LinksPage"

export const useRoutes = (isAuth) => {

    if(isAuth) {
        return (
            <Switch>
                <Route exact path='/links' component={LinksPage} />
                <Route exact path='/create' component={CreatePage} />
                <Route  path='/detail/:id' component={DetailPage} />
                <Redirect to='/create' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path='/' component={AuthPage} />
            <Redirect to='/' />
        </Switch>
    )
}