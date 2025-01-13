import React from "react";

import {FirstSection} from "../../components/firstSection/FirstSection";
import {SecondSection} from "../../components/secondSection/SecondSection";
import {LastSection} from "../../components/lastSection/LastSection";

import './about.css'

export const About:React.FC = () => {
    return (
        <main className="about-page">
            <FirstSection/>
            <SecondSection/>
            <LastSection/>
        </main>
    )
}