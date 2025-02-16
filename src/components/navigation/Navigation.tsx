import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './navigation.css'
import { headerMenuList } from '../header/Header'
import LinkComponent from '../links/LinkComponent'

export const Navigation: React.FC = () => {
    const location = useLocation()
    const navRef = useRef<HTMLDivElement>(null)

    const [toggle, setToggle] = useState<boolean>(false)
    const [animated, setAnimated] = useState<boolean>(false)
    const [active, setActive] = useState<string>('')

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setToggle(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (active !== '') {
            const timer = setInterval(() => {
                setActive('')
                setToggle(false)
            }, 1000)
            return () => {
                clearInterval(timer)
            }
        }
    }, [active])

    useEffect(() => {
        if (toggle) {
            const timer = setTimeout(() => {
                setAnimated(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [toggle])

    useEffect(() => {
        if (!toggle) {
            setAnimated(false)
        }
    }, [toggle])

    return (
        <div className="Nav-Links" ref={navRef}>
            <div
                className={`hamburger-icon ${toggle ? 'active' : ''}`}
                id="icon"
                onClick={() => setToggle((prev) => !prev)}>
                <div className="icon-1" id="a"></div>
                <div className="icon-2" id="b"></div>
                <div className="icon-3" id="c"></div>
                <div className="clear"></div>
            </div>

            {toggle && (
                <div className={`Nav-links_list ${toggle ? 'active' : ''}`}>
                    <div
                        className={`Blue_line ${animated ? 'hide' : ''}`}></div>
                    <ul className="Nav-links">
                        {headerMenuList.map(({ link, title, key: id }) => (
                            <li
                                className={`Nav-link ${active === title || location.pathname === `${link}` ? 'active' : ''}`}
                                key={id + title}>
                                <Link
                                    to={link}
                                    onClick={() => {
                                        setActive(title)
                                    }}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <LinkComponent
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: '2.5vh',
                        }}
                    />
                </div>
            )}
        </div>
    )
}
