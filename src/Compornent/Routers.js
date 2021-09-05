import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search/index";
import TVshow from "../Routes/TVshow/index";
import Detail from "../Routes/Detail"
import Head from "./header";
const Routers=()=>{
    return (
        <Router>
            <Head></Head>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/TV" exact component={TVshow}></Route>
                <Route path="/search" exact component={Search}></Route>

                <Route path="/tv/:id" exact component={Detail}></Route>
                <Route path="/movie/:id" exact component={Detail}></Route>
                <Redirect from ="*" to="/"></Redirect>
            </Switch>
        </Router>
    )
}
export default Routers;