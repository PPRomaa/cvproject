import UWERX from './images/UWERX - screenShot.jpg'
import portfolioScreen from './images/Portfolio - screenShot.png'
import RecipeApp from './images/RecipeApp.png'

interface ProjectsData {
    img: string
    name: string
    desc: string
    url?: string
    link?: string
    skills: string[]
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
        img: RecipeApp,
        name: 'RecipeApp',
        desc: 'Developed a fully functional mobile application using React Native.' +
            ' This project aimed to demonstrate my ability to work with React Native by implementing a user-friendly interface,' +
            ' navigation, and efficient state management. Leveraged modern libraries to enhance functionality and ensure optimal performance.' +
            ' This pet project improved my skills in creating intuitive UI, handling API requests, and maintaining clean, scalable code architecture.',

        url: 'https://github.com/PPRomaa/RecipeApp',
        skills: [
            'React Native',
            'TypeScript',
            'Redux Toolkit',
            'React Navigation',
            'Axios',
        ],
    },
    {
        img: UWERX,
        name: 'UWERX',
        desc:
            'Worked a fully functional website. This project enhanced my proficiency in modern web technologies such as ' +
            'Next.js, TypeScript, and Tailwind CSS, ' +
            'Through this experience, I deepened my' +
            ' understanding of responsive design principles, state management, and component-based architecture,' +
            ' successfully delivering a clean, efficient, and user-friendly application.',
        url: '',
        skills: [
            'UI/UX',
            'TailWind',
            'TypeScript',
            'NextJS',
            'Redux Toolkit',
            'Axios',
        ],
    },
]

export default projectsData
