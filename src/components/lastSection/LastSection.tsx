import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';


import LinkComponent from "../links/LinkComponent";
import TeamWork from '../../icons/collaboration-100.png';
import HandShake from '../../icons/handshake-1.png';
import LightBulb from '../../icons/light-bulb-123.png';

import "./lastSection.css"
import "swiper/css";
import "swiper/css/navigation";

interface QuestionsArr {
    id: number;
    icon: JSX.Element | string;
    question: string;
}

const questionsArray: QuestionsArr[] = [
    {
        id: 0,
        icon: <img src={LightBulb} alt="LightBulb"/>,
        question: 'I bring a strong combination of technical expertise, attention to detail, and a collaborative mindset.',
    },
    {
        id: 1,
        icon: <img src={HandShake} alt="HandShake"/>,
        question: 'My ability to work effectively in teams, coupled with my passion for front-end development, makes me an asset for any project.',
    },
    {
        id: 2,
        icon: <img src={TeamWork} alt="Team Work"/>,
        question: 'I’m always ready to take on new opportunities and contribute to innovative solutions in the web development space.',
    },
]

const LastSection: React.FC = () => {
    return (
        <section className="last-section">
            <div className="question-block">
                <div className="question-tittle">
                    <h1>Why Choose Me?</h1>
                </div>
            </div>
            <div className="question-list">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{clickable: true}}
                    navigation
                    style={{width: "100%"}}
                    breakpoints={{
                        800: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {questionsArray.map(({icon, question, id}) => (
                        <SwiperSlide key={id} style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "20px"
                        }}>
                            <div className="question-list-item">
                                <div className="question-item-title">{icon}</div>
                                <div className="question-item-body">{question}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <LinkComponent style={{justifyContent: "center", paddingTop: "20px"}}/>
        </section>
    )
}

export {LastSection};