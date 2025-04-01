import React from 'react'

import { FirstSection } from '../../components/firstSection/FirstSection'
import { SecondSection } from '../../components/secondSection/SecondSection'
import { LastSection } from '../../components/lastSection/LastSection'

export const About: React.FC = () => {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <LastSection />
        </>
    )
}
