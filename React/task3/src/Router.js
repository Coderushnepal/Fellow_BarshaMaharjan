import React from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from "./main/Main";
import Rain from "./Rain/rain";
import Gain from "./Gain/gain";
 import FourohFour from "./FourOhFour/four";


const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/Gain" component={Gain}/>
            <Route exact path="/Rain" component={Rain}/>
            <Route exact path="/" component={Main}/>
            <Route path="*" component={FourohFour}/>
            </Switch>
            </Router>
);
export default AppRouter;