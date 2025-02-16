import React from 'react'
import { Link } from 'react-router-dom'

import { useVisibility } from '../../hooks'
import { CirclePreloader } from '../../components/preloader/Circle-preloader'

import './notFound.css'

const NotFoundPage: React.FC = () => {
    const { setIsVisible } = useVisibility()

    return (
        <div className={'bad-request-section'}>
            <h1>
                Maybe something went wrong or you followed an invalid link ;(
            </h1>
            <CirclePreloader isNotFound />
            <div className={'bad-request-section_btn'}>
                <div
                    className="contact-block-body"
                    onClick={() => setIsVisible(true)}
                >
                    <Link to={'/'} className="contact-block__btn">
                        Home
                    </Link>
                </div>
                <h3>Please try again)</h3>
            </div>
        </div>
    )
}

export { NotFoundPage }
