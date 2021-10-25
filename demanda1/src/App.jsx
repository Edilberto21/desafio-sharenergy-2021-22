import Dadotempoh from "./Pages/Dadotempoh";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
const App = () => {
    return (
        <Router>
            <Route path="/" exact component={App}/>
            <Route path="/Pages/Dadostempoemhoras"  component={Dadotempoh}/>
        </Router>
    )
}

export default App;