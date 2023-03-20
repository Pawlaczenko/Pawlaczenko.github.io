import { TechnologyKey } from './technologies';
export interface IProject {
    id: string,
    name: string,
    githubLink?: string,
    liveLink?: string,
    shortDescription: string,
    technologies: TechnologyKey[]
}

const PROJECTS : IProject[] = [
    {
        id: "tempo",
        name: "Tempo",
        githubLink: "https://github.com/Pawlaczenko/Tempo-react",
        liveLink: "https://tempo-react.netlify.app/",
        shortDescription: "Test your typing speed with your favourite songs.",
        technologies: ["react","sc","node","router"]
    },
    {
        id: "cafestreet",
        name: "Cafe Street",
        githubLink: "https://github.com/Pawlaczenko/cafe-street",
        liveLink: "https://cafe-street.netlify.app/",
        shortDescription: "A landing page for Cafe Street.",
        technologies: ["react","ts","sc"]
    },
    {
        id: "czytnik",
        name: "Czytnik",
        githubLink: "https://github.com/Pawlaczenko/Czytnik",
        shortDescription: "An online shop for the Czytnik bookstore.",
        technologies: ["asp","sass","efc"]
    },
    {
        id: "earthly",
        name: "Earthly",
        githubLink: "https://github.com/Pawlaczenko/Earthly",
        liveLink: "https://pawlaczenko.github.io/Earthly/",
        shortDescription: "Website for an ecological organization.",
        technologies: ["html","css","js"]
    },
];

export interface IProjectArticle {
    article: string,
    photoPath?: string
}

export const PROJECTS_ARTICLES = new Map<string,IProjectArticle>([
    [
        "tempo",
        {
            photoPath: "miniature-tempo.jpg",
            article: `
                <p>
                Writing Tempo was a great adventure. It turned out to be a fun project that allowed me to get to know React.js and Node.js better. It was an interesting experience, especially since this is my second attempt to write this application, this time using React.js and Node.js. The earlier version ( <a href="https://github.com/Pawlaczenko/Tempo">source code</a> ) was written using self-configured webpack, HTML, SCSS and Javascript, and the next version was aimed at improving programming skills in React.js and adding a backend, which in the previous version of the application left much to be desired.
                </p>
                <p>
                First of all, I proceeded to thoroughly design the application. It went through many different iterations, and landed at using songs as the main theme of the app. I decided what the front-end would look like and what functionalities should be implemented. I decided to use styled-components, which is my favourite tool for styling in React. It was my first time working with the newset version of React Router, and it was a great opportunity to accomodate myself to the changes.
                </p>
                <p>
                After this I proceeded to work on backend. I had my share of inconvienances while working with the Musixmatch API, since it wasn't as user-friendly as I expected. I wrote REST API for Tempo that allowed me to download song lyrics from musixmatch, as well as access album art and song information.
                </p>
                <img src="/projects/tempo/1.jpg" />
                <p>
                One of the biggest challenges in writing Tempo was coming up with an idea of how the typing test itself would work. I had to figure out a way to give the user feedback on the progress of the test.
                </p>
                <p>
                The process of creating Tempo allowed me to learn many new technologies and tools, such as React Router v.6 or Node.js, and it improved my React skills.
                </p>
            `
        }
    ],
    [
        "cafestreet",
        {
            photoPath: "miniature-cafestreet.jpg",
            article: `
                <p>
                siemka
                </p>
            `
        }
    ],
    [
        "czytnik",
        {
            photoPath: "miniature-czytnik.jpg",
            article: `
                <p>
                siemka
                </p>
            `
        }
    ],
    [
        "earthly",
        {
            photoPath: "miniature-earthly.png",
            article: `
                <p>
                siemka
                </p>
            `
        }
    ]
]);

export default PROJECTS;