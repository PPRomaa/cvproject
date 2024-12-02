import React from "react";

import "./containerName.css"
import LinkComponent from "../links/LinkComponent";

const NameContainer:React.FC = () => {
    return (
        <div className="main-name-container">
            <h1 className="name-container"><span>Popadynets</span> <span>Roman</span></h1>
            <h2 className="name-container-position">Front-End Developer</h2>
            <LinkComponent/>
        </div>
    )
}

export {NameContainer};