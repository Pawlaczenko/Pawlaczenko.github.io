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
        shortDescription: "Sprawdź swoją szybkość pisania za pomocą tekstów piosenek.",
        technologies: ["react","sc","node"]
    },
    {
        id: "cafestreet",
        name: "Cafe Street",
        githubLink: "https://github.com/Pawlaczenko/cafe-street",
        liveLink: "https://cafe-street.netlify.app/",
        shortDescription: "Landing Page dla kawiarni Cafe Street",
        technologies: ["react","ts","sc"]
    },
    {
        id: "czytnik",
        name: "Czytnik",
        githubLink: "https://github.com/Pawlaczenko/Czytnik",
        shortDescription: "Sklep Internetowy dla Księgarni Czytnik",
        technologies: ["asp","sass","efc"]
    },
    {
        id: "earthly",
        name: "Earthly",
        githubLink: "https://github.com/Pawlaczenko/Earthly",
        liveLink: "https://pawlaczenko.github.io/Earthly/",
        shortDescription: "Strona Internetowa dla organizacji ekologicznej",
        technologies: ["html","css","js"]
    },
];

export default PROJECTS;