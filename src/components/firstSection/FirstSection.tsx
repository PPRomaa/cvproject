import React, { useEffect, useState } from 'react'
import Globe from 'react-globe.gl'

import './firstSection.css'
import { QuestionsContainer } from '../questionsContainer/QuestionsContainer'

const FirstSection: React.FC = () => {
    const [showGlobe, setShowGlobe] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowGlobe(true), 2500)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <section className="first-section">
            <div className="info-block">
                <div className="title-block">
                    <div className="title-block__name">
                        <h1>Popadynets Roman.</h1>
                        <span>|</span>
                    </div>
                    <div className="title-block__position">
                        <h3>Front-End Developer</h3>
                    </div>
                </div>
                <div className="first-section__body">
                    <h3 className="first-section__body-description">
                        <span>
                            I am a Front-end Developer Specialist with over a
                            year of hands-on experience in developing responsive
                            and user-friendly web applications.
                        </span>
                        <span>
                            My journey into programming began with intensive
                            courses at Okten School, where I acquired both
                            foundational and advanced skills that prepared me
                            for the dynamic world of web development.
                        </span>
                        <span>
                            I thrive on challenges and am always eager to
                            explore and adopt new technologies to meet project
                            specifications and enhance user experience.
                        </span>
                    </h3>
                </div>
                <div className="first-section__tech-stack">
                    <h2 className="first-section__tech-stack-title">
                        Tech Stack
                    </h2>
                    <h3 className="first-section__tech-stack-description">
                        I specialize in JavaScript/TypeScript with a focus on
                        React and Next.js ecosystems. In the future, I would
                        like to work more with React Native projects and become
                        an expert in iOS development.
                    </h3>
                </div>
            </div>
            <QuestionsContainer />
            <div className="globe__block">
                <div className="globe__description">
                    <h1 className="globe__description-title">I work remotely across most timezones</h1>
                    <h3 className="globe__description-subtitle">
                        Now i&#39;m based in Slovakia, with remote work
                        available. ✅
                    </h3>
                    <hr/>
                </div>
                {showGlobe ? (
                    <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                        labelsData={[
                            {
                                lat: 48.6,
                                lng: 19.5,
                                text: "I'm here!",
                                color: 'white',
                                size: 20,
                            },
                        ]}
                    />
                ) : (
                    <div>Loading globe...</div>
                )}
            </div>
        </section>
    )
}

export { FirstSection }
