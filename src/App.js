import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Page from "./components/page"
import Header from "./components/HeaderComponent"
import RegisterForm from "./components/register"
import ViewForm from "./ViewForm"
import NotFoundForm from "./components/NotFound"

function App() {
    const [state, setState] = React.useState({
        title: "Register",
    })

    return (
        <Router>
            <div>
                <Header headerName={state.title} />
                <Switch>
                    <Route exact path="/" component={RegisterForm} />
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/view" component={ViewForm} />
                    <Route component={NotFoundForm} />
                    {/* <RegisterForm /> */}
                    {/* TODO: Add Footer here */}
                </Switch>
            </div>
        </Router>
    )
}

export default App
