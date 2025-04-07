import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

import { useVisibility } from '../../hooks'

import LinkComponent from '../links/LinkComponent'
import { ReactComponent as HandShakeIcon } from '../../assets/icons/handshake-svgrepo-com.svg'
import { ReactComponent as LightBulbIcon } from '../../assets/icons/light-bulb-13-svgrepo-com.svg'
import { ReactComponent as TeamWorkIcon } from '../../assets/icons/team-idea-svgrepo-com.svg'

import './lastSection.css'
import 'swiper/css'
import 'swiper/css/navigation'

interface QuestionsArr {
    id: number
    icon: JSX.Element | string
    question: string
}

const questionsArray: QuestionsArr[] = [
    {
        id: 0,
        icon: <LightBulbIcon />,
        question:
            'I bring a strong combination of technical expertise, attention to detail, and a collaborative mindset.',
    },
    {
        id: 1,
        icon: <TeamWorkIcon />,
        question:
            'My ability to work effectively in teams, coupled with my passion for front-end development, makes me an asset for any project.',
    },
    {
        id: 2,
        icon: <HandShakeIcon />,
        question:
            'I’m always ready to take on new opportunities and contribute to innovative solutions in the web development space.',
    },
]

const LastSection: React.FC = () => {
    const { ref: leftSection, inView: leftSectionIsVisible } = useInView({
        triggerOnce: true,
    })
    const { setIsVisible } = useVisibility()

    return (
        <section className="last-section" ref={leftSection}>
            <div className={`main-question__section ${leftSectionIsVisible ? 'visible' : ''}`}>
                <div className="main-question__block">
                    <div className="main-question__tittle-block">
                        <h1 className="main-question__tittle">Why Choose Me?</h1>
                    </div>
                </div>
                <div className="main-question__list">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        navigation
                        style={{ width: '90%' }}
                        breakpoints={{
                            800: {
                                slidesPerView: 3,
                            },
                        }}>
                        {questionsArray.map(({ icon, question, id }) => (
                            <SwiperSlide
                                key={id}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                }}>
                                <div className="question-list__item">
                                    <div className="question-item__title">
                                        {icon}
                                    </div>
                                    <h2 className="question-item__subtitle">
                                        {question}
                                    </h2>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div
                    className="contact-block__body"
                    onClick={() => setIsVisible(true)}>
                    <Link to={'/contacts'} className="contact-block__btn">
                        Contact me
                    </Link>
                </div>
                <LinkComponent
                    style={{ justifyContent: 'center', paddingTop: '15px' }}
                />
            </div>
        </section>
    )
}

export { LastSection }
