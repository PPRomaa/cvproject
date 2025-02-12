import React, {useState} from "react";

import "./questionsContainer.css";
import {ReactComponent as Arrow} from '../../assets/icons/arrow-svg.svg';

interface IQuestions {
    question: string,
    answer: string
}

const questionsList: IQuestions[] = [
    {
        question: "What technologies do you use in your work?",
        answer: "I work with React, TypeScript, Next.js, Redux, Tailwind CSS, Material-UI, and have some knowledge of Node.js."
    },
    {
        question: "Do you have experience with server-side rendering (SSR)?",
        answer: "Yes, I've been working with Next.js, which supports SSR and static generation (SSG) to improve application performance."
    },
    {
        question: "How do you work with state in React apps?",
        answer: "I use the Context API, Redux Toolkit, depending on the scale and complexity of the project."
    },
    {
        question: "How do you work with animations in React?",
        answer: "I use libraries such as React Transition Group to create smooth and attractive animations."
    },
    {
        question: "Can you work with the API?",
        answer: "Yes, I have integrated REST API and GraphQL into React apps using Axios, Fetch API."
    },
    {
        question: "How do you optimize the performance of React apps?",
        answer: "I use memoization (React.memo, useMemo, useCallback), rendering optimization, code splitting, and lazy loading to improve performance."
    }
]

const QuestionsContainer: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="console-block">
            <div className="terminal-mockup">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="terminal-body">
                    <ul className="faq-list">
                        {questionsList.map(({ question, answer }, index) => (
                            <li key={index} className="faq-item" onClick={() => handleClick(index)}>
                                <h6 className="faq-question">{question} <Arrow className={`arrow-icon ${activeIndex === index ? "rotate" : ""}`}/></h6>
                                <p className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
                                    {answer}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {QuestionsContainer};