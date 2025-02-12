import UWERX from "./images/UWERX - screenShot.jpg";
import portfolioScreen from "./images/Portfolio - screenShot.png";


interface ProjectsData {
    img: string;
    name: string;
    desc: string;
    url?: string;
    link?: string;
    skills: string[];
}

const projectsData: ProjectsData[] = [
    {
        img: portfolioScreen,
        name: 'Portfolio',
        desc: 'Performing all related tasks of the full development cycle.',
        link: '/',
        url: 'https://github.com/PPRomaa/cvproject',
        skills: ['UI/UX', 'CSS', 'TypeScript', 'React'],
    },
    {
        img: UWERX,
        name: 'UWERX',
        desc: 'Worked a fully functional website. This project enhanced my proficiency in modern web technologies such as ' +
            'Next.js, TypeScript, and Tailwind CSS, ' +
            'Through this experience, I deepened my' +
            ' understanding of responsive design principles, state management, and component-based architecture,' +
            ' successfully delivering a clean, efficient, and user-friendly application.',
        url: '',
        skills: ['UI/UX', 'TailWind', 'TypeScript', 'NextJS', 'Redux Toolkit'],
    },
]

export default projectsData;