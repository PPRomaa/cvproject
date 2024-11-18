import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import './navigation.css';
import LinkComponent from "../links/LinkComponent";

export const Navigation: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    const [animated, setAnimated] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (toggle) {
            const timer = setTimeout(()=>{
                setAnimated(true);
            },400)
            return () => clearTimeout(timer)
        }
    }, [toggle]);

    return (
        <div className="Nav-Links" ref={navRef}>
            <div className={`hamburger-icon ${toggle ? "active" : ""}`}
                 id="icon"
                 onClick={() => setToggle((prev) => !prev)}>
                <div className="icon-1" id="a"></div>
                <div className="icon-2" id="b"></div>
                <div className="icon-3" id="c"></div>
                <div className="clear"></div>
            </div>

            {toggle && (
                <div className={`Nav-links_list ${toggle ? "active" : ""}`}>
                    <div className={`Blue_line ${animated ? "hide" : ""}`}></div>
                    <ul className="Nav-links">
                        <li className="Nav-link">
                            <Link to={'/about'} onClick={() => setToggle(false)}>About Me</Link>
                        </li>
                        <li className="Nav-link">
                            <Link to={'/projects'} onClick={() => setToggle(false)}>Portfolio</Link>
                        </li>
                        <li className="Nav-link closed">Coming soon</li>
                    </ul>
                    <LinkComponent/>
                </div>
            )}
        </div>
    );
};