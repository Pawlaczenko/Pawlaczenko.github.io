import { IconType } from "react-icons/lib";
import { 
    SiReact,
    SiJavascript,
    SiStyledcomponents,
    SiCss3,
    SiNodedotjs,
    SiHtml5,
    SiTypescript,
    SiSass
} from "react-icons/si";

export interface ITechnology {
    name: string,
    color?: string, // in HSL format: "x, x, x"
    icon?: React.ReactNode
}

export type TechnologyKey = 
    "react" |
    "js"|
    "ts"|
    "sc"|
    "css"|
    "node"|
    "html"|
    "asp"|
    "efc"|
    "sass";

const TECHNOLOGIES = new Map<TechnologyKey, ITechnology>([
    [
        "react",
        {
            name: "REACT",
            color: "#61DBFB",
            icon: <SiReact />
        }
    ],
    [
        "js",
        {
            name: "JavaScript",
            color: "#FFD83A",
            icon: <SiJavascript />
        }
    ],
    [
        "ts",
        {
            name: "TypeScript",
            color: "#2F72BC",
            icon: <SiTypescript />
        }
    ],
    [
        "sc",
        {
            name: "styled components",
            color: "#D2698B",
            icon: <SiStyledcomponents />
        }
    ],
    [
        "css",
        {
            name: "CSS/SCSS",
            color: "#33A9DC",
            icon: <SiCss3 />
        }
    ],
    [
        "node",
        {
            name: "node.js",
            color: "#83CD29",
            icon: <SiNodedotjs />
        }
    ],
    [
        "html",
        {
            name: "HTML",
            color: "#F1662A",
            icon: <SiHtml5 />
        }
    ],
    [
        "asp",
        {
            name: "ASP.NET 5",
        }
    ],
    [
        "efc",
        {
            name: "Entity Framework Core",
        }
    ],
    [
        "sass",
        {
            name: "Sass",
            icon: <SiSass />
        }
    ],
]) ;

export default TECHNOLOGIES;