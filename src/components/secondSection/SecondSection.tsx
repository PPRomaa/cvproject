import React, {useState} from 'react'
import {useInView} from 'react-intersection-observer'
import Marquee from "react-fast-marquee";

import {ReactComponent as WebstormIcon} from '../../assets/icons/webstorm-svgrepo-com.svg'
import {ReactComponent as JavaScriptIcon} from '../../assets/icons/javascript.svg'
import {ReactComponent as TypeScriptIcon} from '../../assets/icons/typescript.svg'
import {ReactComponent as GitIcon} from '../../assets/icons/git.svg'
import {ReactComponent as MuiIcon} from '../../assets/icons/material-ui-svgrepo-com.svg'
import {ReactComponent as NextIcon} from '../../assets/icons/nextjs-icon-svgrepo-com.svg'
import {ReactComponent as NodeIcon} from '../../assets/icons/nodejs-icon.svg'
import {ReactComponent as ReactIcon} from '../../assets/icons/react-svgrepo-com.svg'
import {ReactComponent as TailwindIcon} from '../../assets/icons/tailwind-svgrepo-com.svg'
import {ReactComponent as EslintIcon} from '../../assets/icons/eslint-icon.svg'

import './secondSection.css'

interface SkillsArray {
    title: string
    subTitle?: string
    description?: string
}
interface IIcons {
    title: string
    logo: JSX.Element
}

const arrSkills: SkillsArray[] = [
    {
        title: 'HTML5, CSS3, and SASS',
        subTitle:'TailwindIcon',
        description:
            'Proficient in writing clean, maintainable styles with a strong understanding of modern layouts, accessibility, and responsive design.',
    },
    {
        title: 'CSS Frameworks',
        subTitle:'MuiIcon',
        description:
            'Experienced with Tailwind CSS, BEM methodology, and Material UI to ensure efficient and scalable styling.',
    },
    {
        title: 'Design Collaboration',
        subTitle:'TailwindIcon',
        description:
            'Familiar with tools like Figma for interpreting design specifications and delivering pixel-perfect implementations.',
    },
    {
        title: 'JavaScript (ES6+)',
        subTitle:'JavaScriptIcon',
        description:
            'Solid understanding of modern JavaScript concepts, including promises, async/await, and DOM manipulation.',
    },
    {
        title: 'React',
        subTitle:'ReactIcon',
        description:
            'Skilled in creating interactive components using React with features like Hooks, React Router, and state management using Redux and Redux Toolkit.',
    },
    {
        title: 'React Native',
        subTitle:'ReactIcon',
        description: 'Capable of developing cross-platform mobile applications.',
    },
    {
        title: 'TypeScript',
        subTitle:'TypeScriptIcon',
        description:
            'Experienced in ensuring type safety and reducing bugs in large codebases.',
    },
    {
        title: 'Next.js',
        subTitle:'NextIcon',
        description: 'Familiar with server-side rendering for React applications.',
    },
    {
        title: 'Version Control',
        subTitle:'GitIcon',
        description: 'Great for working with Git.',
    },
    {
        title: 'ESLint & Prettier',
        subTitle:'EslintIcon',
        description:
            'Experienced in using ESLint for maintaining code quality and consistency, and Prettier for automatic code formatting to ensure clean, readable code across projects.\n' +
            '\n',
    },
    {
        title: 'Backend Familiarity',
        subTitle:'NodeIcon',
        description:
            'Basic knowledge of node and databases, such as MongoDB,MySQL, enabling me to collaborate effectively with backend teams.',
    },
    {
        title: 'English Proficiency',
        description: 'Upper-Intermediate level',
    },
]
const arrIcons: IIcons[] = [
    {
        title: 'TypeScriptIcon',
        logo: <TypeScriptIcon/>,
    },
    {
        title: 'WebstormIcon',
        logo: <WebstormIcon/>,
    },
    {
        title: 'GitIcon',
        logo: <GitIcon/>,
    },
    {
        title: 'JavaScriptIcon',
        logo: <JavaScriptIcon/>,
    },
    {
        title: 'MuiIcon',
        logo: <MuiIcon/>
    },
    {
        title: 'NodeIcon',
        logo: <NodeIcon/>
    },
    {
        title: 'ReactIcon',
        logo: <ReactIcon/>
    },
    {
        title: 'NextIcon',
        logo: <NextIcon/>
    },
    {
        title: 'TailwindIcon',
        logo: <TailwindIcon/>
    },
    {
        title: 'EslintIcon',
        logo: <EslintIcon/>
    },
]

const SecondSection: React.FC = () => {
    const {ref: leftSection, inView: leftSectionIsVisible} = useInView({
        triggerOnce: true,
    })
    const {ref: rightSection, inView: rightSectionIsVisible} = useInView({
        triggerOnce: true,
    })
    const [active, setActive] = useState<string>('');


    const handleOnMove = (subtitle:string) => {
        setActive(subtitle)
    }
    const handleOnLeave = () => {
        setActive('');
    }
    return (
        <section className="second-section">
            <div className="icon-section" ref={leftSection}>
                <Marquee autoFill pauseOnHover speed={80}>
                    <div className="icon-section__items">
                        {arrIcons.map(({title, logo}) => (
                            <div
                                key={title + logo}
                                className={`icon-section__item ${leftSectionIsVisible ? 'visible' : ''} ${active === title ? 'active' : ''}`}>
                                {logo}
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
            <div className="skills-section" ref={rightSection}>
                <div
                    className={`skills-section__block ${rightSectionIsVisible ? 'visible' : ''}`}>
                    <h1 className="skills-section__title">
                        Professional Skills
                    </h1>
                    <ul className="skills-section__list">
                        {arrSkills.map(({title, description,subTitle}) => (
                            <li
                                onMouseEnter={() => handleOnMove(subTitle ? subTitle : '')}
                                onMouseLeave={handleOnLeave}
                                key={title + subTitle}
                                className="skills-list__item">
                                <strong>{title}:</strong> {description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export {SecondSection}
