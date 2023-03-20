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
        technologies: ["react","sc","node","router"]
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
                Napisanie aplikacji Tempo stanowiło dla mnie wyzwanie, ale jednocześnie okazało się bardzo interesującym projektem, który pozwolił na lepsze poznanie React.js oraz Node.js. Było to ciekawe doświadczenie, zwłaszcza że to moje drugie podejście do napisania tej aplikacji, tym razem w oparciu o React.js i Node.js. Wcześniejsza wersja ( <a href="https://github.com/Pawlaczenko/Tempo">kod źródłowy</a> ) została napisana przy użyciu własnoręcznie skonfigurowanego webpacka, HTML, SCSS i Javascript, a kolejna wersja miała na celu doskonalenie umiejętności programowania w React.js oraz dodanie backendu, który w poprzedniej wersji aplikacji pozostawiał wiele do życzenia.</p>
                <p>
                W pierwszej kolejności, przystąpiłem do dokładnego zaprojektowania aplikacji. Zdecydowałem, jak będzie wyglądać front-end, a także jakie funkcjonalności powinny zostać zaimplementowane w backendzie. Dzięki temu udało mi się napisać front-end aplikacji z użyciem React.js oraz biblioteki styled-components do stylowania interfejsu użytkownika. Wykorzystanie tej biblioteki pozwoliło na łatwe zarządzanie stylami, a także na zapewnienie przejrzystego i spójnego wyglądu aplikacji.
                </p>
                <p>
                Następnie, skupiłem się na tworzeniu backendu w Node.js. Stworzyłem własne REST API, które umożliwia pobieranie tekstów piosenek z serwisu musixmatch, a także dostęp do okładek albumów oraz informacji o piosenkach.
                </p>
                <img src="/projects/tempo/1.jpg" />
                <p>
                Jednym z największych wyzwań w pisaniu aplikacji Tempo było napisanie mechanizmu testu pisania. Musiałem wymyślić sposób, w jaki dawać użytkownikowi feedback dotyczący postępu w teście.
                </p>
                <p>
                Proces tworzenia aplikacji Tempo pozwolił mi na poznanie wielu nowych technologii i narzędzi, takich jak React Router w wersji v.6 czy Node.js oraz udoskonalenie umiejętnośći pisania reactowego kodu.
                </p>
            `
        }
    ]
]);

export default PROJECTS;