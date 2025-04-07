import React from 'react'
import { Link } from 'react-router-dom'

import {useVisibility} from "../../hooks";
import './rootContainer.css'
import iconImage from '../../assets/icons/logo.png'

const RootContainer: React.FC = () => {
    const { setIsVisible } = useVisibility()

    return (
        <div className="root__container">
            <div className="root__link-section">
                <h1 className="root__link-title">Contact</h1>
                <Link
                    className="root__link-item"
                    target={'_blank'}
                    to={
                        'https://www.linkedin.com/in/roman-popadynets-705b17265/'
                    }>
                    LinkedIn
                </Link>
                <Link
                    className="root__link-item"
                    target={'_blank'}
                    to={'https://t.me/ppromaaaa'}>
                    Telegram
                </Link>
                <Link
                    className="root__link-item"
                    target={'_blank'}
                    to={'https://github.com/PPRomaa'}>
                    GitHub
                </Link>
                <h2 className="root__link-item">Slovakia/Bratislava</h2>
            </div>
            <div className="root__logo-section">
                <img
                    className="root__logo-image"
                    src={iconImage}
                    alt={'logo'}
                />
                <p className="root__logo-text">
                    © {new Date().getFullYear()} PPRomaa. <br/> All rights reserved.
                </p>
            </div>
            <div className="root__navigation-section">
                <h1 className="root__navigation-title">Links</h1>
                <Link
                    className="root__navigation-item"
                    to={'/about'}
                    onClick={() => {
                        setIsVisible(true)
                    }}>
                    About
                </Link>
                <Link
                    className="root__navigation-item"
                    to={'/projects'}
                    onClick={() => {
                        setIsVisible(true)
                    }}>
                    Portfolio
                </Link>
                <Link
                    className="root__navigation-item"
                    to={'/contacts'}
                    onClick={() => {
                        setIsVisible(true)
                    }}>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export { RootContainer }
