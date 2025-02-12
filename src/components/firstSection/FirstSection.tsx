import React, {useEffect, useState} from "react";
import Globe from "react-globe.gl";

import "./firstSection.css"
import {QuestionsContainer} from "../questionsContainer/QuestionsContainer";

const FirstSection: React.FC = () => {
    const [showGlobe, setShowGlobe] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowGlobe(true), 2500);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <section className="first-section">
            <div className="info-block">
                <div className="title-block">
                    <h1>Popadynets Roman.</h1>
                    <h3>Front-End Developer</h3>
                </div>
                <div className="body-block">
                    <h3 className="body-description">
                        <span>I am a Front-end Developer Specialist with over a year of hands-on experience in developing
                        responsive and user-friendly web applications. </span> <span> My journey into programming began with intensive
                        courses at Okten School, where I acquired both foundational and advanced skills that prepared me
                        for the dynamic world of web development.</span> <span> I thrive on challenges and am always eager to explore
                        and adopt new technologies to meet project specifications and enhance user experience.</span>
                    </h3>
                </div>
                <div className="tech-stack-block">
                    <h1 className="tech-stack-title">
                        Tech Stack
                    </h1>
                    <h3 className="tech-stack-description">
                        I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems. In the
                        future, I would like to work more with React Native projects and become an expert in iOS
                        development.
                    </h3>
                </div>
            </div>
            <QuestionsContainer />
            <div className="globe-block">
                <div className="globe-description">
                    <h1>I work remotely across most timezones</h1>
                    <h3>Now i'm based in Slovakia, with remote work available.✅</h3>
                </div>
                {showGlobe ? (
                    <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                        labelsData={[
                            {
                                lat: 48.6,
                                lng: 19.5,
                                text: "I'm here!",
                                color: "white",
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

export {FirstSection};