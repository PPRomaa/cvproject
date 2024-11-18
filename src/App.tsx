import React from 'react';
import { Route, Routes} from "react-router-dom";

import './App.css';
import {Home} from "./components/home/Home";
import {About} from "./components/about/About";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Header} from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
import {useVisibility} from "./hooks";

function App() {
    const {isVisible} = useVisibility();

    if (isVisible) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/projects'} element={<Portfolio/>}/>
            </Routes>
        </div>
    );
}

export default App;
