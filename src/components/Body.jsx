import React from "react";
import Login from "./Login";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Browse from "./Browse";

const Body = () =>{

    return(
    //    Router implement here
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
    </Routes>
    
    </BrowserRouter>

    
    )
}

export default Body;