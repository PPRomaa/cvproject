import React from 'react';
import { Route, Routes} from "react-router-dom";

import './App.css';
import {Home} from "./pages/home/Home";
import {About} from "./pages/about/About";
import {Portfolio} from "./pages/portfolio/Portfolio";
import {Header} from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
import {useVisibility} from "./hooks";
import {NotFoundPage} from "./pages/notFound/notFound";

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
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
