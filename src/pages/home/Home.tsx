import React from 'react';

import { NameContainer } from '../../components/containers/NameContainer';
import { PhotoContainer } from '../../components/containers/PhotoContainer';
import './home.css';

export const Home: React.FC = () => {
    return (
        <main className="home-wrapper">
            <NameContainer />
            <PhotoContainer />
        </main>
    );
};
