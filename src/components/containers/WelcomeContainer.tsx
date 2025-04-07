import React from 'react';

import './welcomeContainer.css';
import { ReactComponent as HammerScrewDriver } from '../../assets/icons/hammer-and-screwdriver.svg'
import { ReactComponent as HttpLogo } from '../../assets/icons/http.svg'


const WelcomeContainer:React.FC = () => {
    return (
        <div className="welcome__container">
            <h1 className="welcome__title">
                You‘re Safe And in Good Hands
            </h1>
            <h2 className="welcome__description">
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </h2>
            <div className="services-section__list">
                <div className="services-section__item">
                    <HammerScrewDriver />
                    <h2 className="services-item__tittle">
                        Continuous support
                    </h2>
                    <h3 className="services-item__description">
                        I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week.
                    </h3>
                </div>
                <div className="services-section__item">
                    <HttpLogo/>
                    <h2 className="services-item__tittle">
                        Frontend design/dev
                    </h2>
                    <h3 className="services-item__description">
                        As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export {WelcomeContainer};
