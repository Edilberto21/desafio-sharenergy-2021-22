import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./App";
import Dadostempoemhoras from "../Pages/Dadotempoh";
const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Dadostempoemhoras }  path="/graficodadostempoemhoras"/>
       </BrowserRouter>
   )
}

export default Routes;