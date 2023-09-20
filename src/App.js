import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import * as React from "react";

export default function App() {

    // const UserContext = createContext()

    return (
        <Routes>
            {/*<UserContext.Provider value='pascal'>*/}
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/home"} element={<Main/>}/>
            {/*</UserContext.Provider>*/}
        </Routes>
    );
}

