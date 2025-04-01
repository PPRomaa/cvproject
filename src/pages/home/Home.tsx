import React from 'react'

import { NameContainer } from '../../components/containers/NameContainer'
import { PhotoContainer } from '../../components/containers/PhotoContainer'
import './home.css'

export const Home: React.FC = () => {
    return (
        <>
            <div className="home__wrapper">
                <NameContainer />
                <PhotoContainer />
            </div>
            {/*<div className="bottom__wrapper">*/}
            {/*    <div className="bottom__blue-element"></div>*/}
            {/*</div>*/}
        </>
    )
}
