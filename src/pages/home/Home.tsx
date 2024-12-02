import React from "react";

import "./home.css"
import {NameContainer} from "../../components/containers/NameContainer";
import {PhotoContainer} from "../../components/containers/PhotoContainer";

export const Home:React.FC = () => {
    return (
        <main className="home-wrapper">
            <NameContainer/>
            <PhotoContainer/>
        </main>
    )
}