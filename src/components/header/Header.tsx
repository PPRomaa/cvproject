import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useVisibility } from '../../hooks'
import { Navigation } from '../navigation/Navigation'
import './header.css'

interface IMenu {
    link: string
    title: string
    key: number
}
export const headerMenuList: IMenu[] = [
    {
        link: '/about',
        title: 'About Me',
        key: 0,
    },
    {
        key: 1,
        link: '/projects',
        title: 'Portfolio',
    },
    {
        key: 2,
        link: '/contacts',
        title: 'Contact',
    },
]

export const Header: React.FC = () => {
    const { setIsVisible } = useVisibility()
    const location = useLocation()

    return (
        <header className="App-header">
            <div className="App-wrapper">
                <div className="App-wrapper_logo">
                    <Link
                        to={'/'}
                        className="App_logo"
                        onClick={() => setIsVisible(true)}>
                        <span className="tag-color">&lt;</span>
                        <span>CodeWalker</span>
                        <span className="tag-color">/&gt;</span>
                    </Link>
                </div>
                <div className="App-header_links">
                    {headerMenuList.map(({ link, title, key }) => (
                            <Link className="App-link" key={key} to={link} onClick={() => setIsVisible(true)}>
                                {title}
                                <span className={`Blue_border ${location.pathname === link ? 'active' : ''}`}></span>
                            </Link>
                    ))}
                </div>
                <Navigation />
            </div>
        </header>
    )
}
