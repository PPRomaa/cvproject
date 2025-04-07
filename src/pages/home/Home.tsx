import React from 'react'

import { NameContainer } from '../../components/containers/NameContainer'
import { PhotoContainer } from '../../components/containers/PhotoContainer'
import {WelcomeContainer} from "../../components/containers/WelcomeContainer";
import './home.css'
import {RootContainer} from "../../components/containers/RootContainer";

export const Home: React.FC = () => {
    return (
        <>
            <div className="home__wrapper">
                <NameContainer/>
                <PhotoContainer/>
            </div>
            <hr/>
            <div className="bottom__wrapper">
                <WelcomeContainer/>
            </div>
            <hr/>
            <div className="root__wrapper">
                <RootContainer />
            </div>
        </>
    )
}
