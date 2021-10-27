import React from "react";
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes/Routes"
import Header from "./Components/Cabeçalho/Header"
function App() {
    return(
      
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    )
}
export default App