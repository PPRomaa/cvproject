import React from 'react'

import { FirstSection } from '../../components/firstSection/FirstSection'
import { SecondSection } from '../../components/secondSection/SecondSection'
import { LastSection } from '../../components/lastSection/LastSection'
import {RootContainer} from "../../components/containers/RootContainer";

export const About: React.FC = () => {
    return (
        <>
            <FirstSection />
            <hr/>
            <SecondSection />
            <hr/>
            <LastSection />
            <hr/>
            <RootContainer />
        </>
    )
}
