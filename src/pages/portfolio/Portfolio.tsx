import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import projectsData from '../../assets/projectsData'
import './portfolio.css'

export const Portfolio: React.FC = () => {
    return (
        <main className="main-container">
            <section className="main-section">
                <h1 className="base-title">Some Works</h1>
                <div className="projects-container">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 666: 2, 1024: 3 }}
                    >
                        <Masonry gutter={'20px'}>
                            {projectsData.map(
                                (
                                    { img, name, url, skills, desc, link },
                                    index
                                ) => {
                                    return (
                                        <div
                                            key={index + name}
                                            className="project-card"
                                        >
                                            <div className="project-card-item">
                                                <img src={img} alt={name} />
                                                <div className="project-card-info">
                                                    <p className="card-title">
                                                        {' '}
                                                        {name}
                                                        <span>_</span>
                                                    </p>
                                                    <p className="card-description">
                                                        {desc}
                                                    </p>
                                                    <div className="link__list">
                                                        {url &&
                                                            url.length > 0 && (
                                                                <a
                                                                    href={url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="card-nav-link"
                                                                >
                                                                    Code
                                                                    <span className="blue_line"></span>
                                                                </a>
                                                            )}
                                                        {link &&
                                                            link.length > 0 && (
                                                                <a
                                                                    href={link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="card-nav-link"
                                                                >
                                                                    Site
                                                                    <span className="blue_line"></span>
                                                                </a>
                                                            )}
                                                    </div>
                                                    {skills && (
                                                        <div className="card-skills">
                                                            <p className="project-card__title">
                                                                Skills:
                                                            </p>
                                                            <ul className="project-card__list">
                                                                {skills.map(
                                                                    (
                                                                        skill,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="project-card__item"
                                                                        >
                                                                            {
                                                                                skill
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="blue-block"></div>
                                        </div>
                                    )
                                }
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </section>
        </main>
    )
}
