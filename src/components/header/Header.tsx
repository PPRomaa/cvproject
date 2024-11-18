import React from "react";
import {Link} from "react-router-dom";

import {Navigation} from "../navigation/Navigation";
import './header.css';
import {useVisibility} from "../../hooks";


export const Header: React.FC = () => {
    const {setIsVisible} = useVisibility();

    return (
        <header className="App-header">
            <div className="App-wrapper">
                <div className="App-wrapper_logo">
                    <Link to={'/'} className="App_logo" onClick={() => setIsVisible(true)}>
                        <span className="tag-color">&lt;</span>
                        <span>Broomski</span>
                        <span className="tag-color">/&gt;</span>
                    </Link>
                </div>
                <ul className="App-header_links">
                    <li className="App-link"><Link to={'/about'} onClick={() => setIsVisible(true)}>About Me</Link><span className="Blue_border"></span>
                    </li>
                    <li className="App-link"><Link to={'/projects'} onClick={() => setIsVisible(true)}>Portfolio</Link><span
                        className="Blue_border"></span></li>
                </ul>

                <Navigation/>
            </div>
        </header>
    )
}