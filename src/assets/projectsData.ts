import UWERX from "./images/UWERX - screenShot.jpg"


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
        img: UWERX,
        name: 'UWERX',
        desc: 'Worked a fully functional website. This project enhanced my proficiency in modern web technologies such as ' +
            'Next.js, TypeScript, and Tailwind CSS, ' +
            'while sharpening my skills in Figma for designing user interfaces. Through this experience, I deepened my' +
            ' understanding of responsive design principles, state management, and component-based architecture,' +
            ' successfully delivering a clean, efficient, and user-friendly application.',
        url: '/',
        skills: ['UI/UX', 'TailWind', 'TypeScript', 'NextJS'],
    },
]

export default projectsData;