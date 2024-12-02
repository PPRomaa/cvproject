import React from "react";

import "./secondSection.css"
import {ReactComponent as WebstormIcon} from 'icons/webstorm-svgrepo-com.svg';
import {ReactComponent as JavaScriptIcon} from 'icons/javascript.svg';
import {ReactComponent as TypeScriptIcon} from 'icons/typescript.svg';
import {ReactComponent as GitIcon} from 'icons/git.svg';

interface SkillsArray {
    title: string;
    subTitle: string;
};
interface IIcons {
    title: string;
    logo: JSX.Element;
}

const arrSkills: SkillsArray[] = [
    {
        title: 'HTML5, CSS3, and SASS',
        subTitle: 'Proficient in writing clean, maintainable styles with a strong understanding of modern layouts, accessibility, and responsive design.'
    },
    {
        title: 'CSS Frameworks',
        subTitle: 'Experienced with Tailwind CSS and BEM methodology to ensure efficient and scalable styling.'
    },
    {
        title: 'Design Collaboration',
        subTitle: 'Familiar with tools like Figma for interpreting design specifications and delivering pixel-perfect implementations.'
    },
    {
        title: 'JavaScript (ES6+)',
        subTitle: 'Solid understanding of modern JavaScript concepts, including promises, async/await, and DOM manipulation.'
    },
    {
        title: 'React',
        subTitle: 'Skilled in creating interactive components using React with features like Hooks, React Router, and state management using Redux and Redux Toolkit.'
    },
    {
        title: 'React Native',
        subTitle: 'Capable of developing cross-platform mobile applications.'
    },
    {
        title: 'TypeScript',
        subTitle: 'Experienced in ensuring type safety and reducing bugs in large codebases.'
    },
    {
        title: 'Next.js',
        subTitle: 'Familiar with server-side rendering and optimizing SEO for React applications.'
    },
    {
        title: 'Version Control',
        subTitle: 'Expertise in Git for collaboration and code management.'
    },
    {
        title: 'Project Management',
        subTitle: 'Worked in Scrum environments, ensuring timely delivery of sprints and clear communication within a team.'
    },
    {
        title: 'Backend Familiarity',
        subTitle: 'Basic knowledge of MongoDB, enabling me to collaborate effectively with backend teams.'
    },
    {
        title: 'English Proficiency',
        subTitle: 'Upper-Intermediate level'
    },
]
const arrIcons:IIcons[] = [
    {
        title: 'JavaScriptIcon',
        logo: <JavaScriptIcon/>
    },
    {
        title: 'TypeScriptIcon',
        logo: <TypeScriptIcon/>
    },
    {
        title: 'WebstormIcon',
        logo: <WebstormIcon/>
    },
    {
        title: 'GitIcon',
        logo: <GitIcon/>
    },
]

const SecondSection: React.FC = () => {
    return (
        <section className="second-section">
            <div className="icon-section">
                <div className="icon-items">
                    {arrIcons.map(({title,logo}) => (
                        <div key={title + logo} className="icon-item">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills-section">
                <h1 className="skills-title">Professional Skills</h1>
                <ul className="skills-list">
                    {arrSkills.map(({title, subTitle}) => (
                        <li key={title + subTitle} className="skills-item">
                            <strong>{title}:</strong> {subTitle}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export {SecondSection};