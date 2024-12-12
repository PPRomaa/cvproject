import React from "react";

import {ReactComponent as LinkedinLogo} from '../../assets/icons/linkedin.svg';
import {ReactComponent as TelegramLogo} from '../../assets/icons/icons8-telegram.svg';
import {ReactComponent as GitHubLogo} from '../../assets/icons/github.svg';

import "./contactStyles.css"

interface LinkProps {
    style?: React.CSSProperties;
}
interface LinkState {
    title: string;
    link: string;
    logo: JSX.Element;
}

const arr: LinkState[] = [
    {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/roman-popadynets-705b17265/',
        logo: <LinkedinLogo /> // React-компонент
    },
    {
        title: 'Telegram',
        link: 'https://t.me/ppromaaaa',
        logo: <TelegramLogo />
    },
    {
        title: 'GitHub',
        link: 'https://github.com/PPRomaa',
        logo: <GitHubLogo />
    }
];

const LinkComponent: React.FC<LinkProps> = ({style }) => {
    return (
        <div className="contact-container" style={style}>
            {arr.map(({title, link, logo}) => (
                <div key={title} className="contact-item">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {logo}
                        <span className="contact-title">{title}</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default LinkComponent;