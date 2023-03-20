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
                Writing Tempo was a great adventure. It turned out to be a fun project that allowed me to get to know <b>React.js</b> and <b>Node.js</b> better. It was an interesting experience, especially since this is my second attempt to write this application, this time using React.js and Node.js. The earlier version ( <a href="https://github.com/Pawlaczenko/Tempo">source code</a> ) was written using self-configured webpack, HTML, SCSS and Javascript, and the next version was aimed at improving programming skills in React.js and adding a backend, which in the previous version of the application left much to be desired.
                </p>
                <p>
                First of all, I proceeded to thoroughly design the application. It went through many different iterations, and landed at using songs as the main theme of the app. I decided to use <b>styled-components</b>, which is my favourite tool for styling in React. It was my first time working with the newset version of <b>React Router</b>, and it was a great opportunity to accomodate myself to the changes.
                </p>
                <p>
                After this I proceeded to work on backend. I had my share of inconvienances while working with the <b>Musixmatch API</b>, since it wasn't as user-friendly as I expected. I wrote <b>REST API</b> for Tempo that allowed me to download song lyrics from musixmatch, as well as access album art and song information.
                </p>
                <img src="/projects/tempo/1.jpg" alt="Typing test in progress." />
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
            <p>Creating a landing page for Cafe Street was a fantastic experience for me. I used <b>React</b> with <b>styled components</b> and <b>TypeScript</b> to build the website, and it was my first time using TypeScript. At the beginning of the project, I was focused on making the components as reusable and adaptable as possible. After a while, the building process felt like playing with blocks, and it was incredibly enjoyable.</p>
            <p>One of the things I loved about using React was the ability to create reusable components. By doing so, I saved myself a lot of time by reusing components throughout the website that could easily adapt to different use-cases or screen sizes.</p>
            <p>Using TypeScript was a new experience for me, and it was great to learn how to use it in combination with React. TypeScript allowed me to write more robust code, catch errors early on, and make the code more readable. I found the process of creating reusable components even more enjoyable with TypeScript because it helped me catch errors and make sure the components were working as expected.</p>
            <img src="/projects/cafestreet/1.png" alt="CafeStreet screenshot" />
            <p>Overall, the process of building the Cafe Street landing page was a fantastic learning experience for me. I enjoyed using React, styled components, and TypeScript to create reusable and adaptable components, making the building process fun and enjoyable. I am excited to continue building projects with these technologies and exploring more ways to create.</p>
            `
        }
    ],
    [
        "czytnik",
        {
            photoPath: "miniature-czytnik.jpg",
            article: `
            <p>Creating Czytnik, an online bookstore, was an amazing experience for me. I worked on this project with two other team members and we used the GitHub workflow and Trello to plan the development process. The organization was excellent, and it helped us to stay on track and meet our goals efficiently.</p>
            <p>Writing the website was challenging for me because I had no prior experience with <b>ASP.NET 5</b> and <b>Entity Framework Core</b>. However, I took it as an opportunity to learn and grow as a developer. I was learning while I was writing the code, and it was an excellent experience for me. It was the most extensive project I have worked on, and I was responsible for creating a layout in Figma and coding the majority of the front end.</p>
            <p>One of the most tedious parts of the project was scraping data from the Empik store and parsing it to meet our requirements. I created a small helper program in JavaScript that transposes the raw data that we had, to the EF code, which we later used to fill the database entries. It was a great learning experience. I enjoyed the challenge and felt accomplished when it was successfully implemented into the project.</p>
            <img src="/projects/czytnik/1.jpg" alt="Section of the page with a Product listing."/>
            <p>Throughout the project, I was able to improve my coding skills and develop my problem-solving abilities. I also learned how to collaborate effectively with team members and stay on schedule. It was a valuable experience, and I am proud of the final result.</p>
            <p>Overall, creating Czytnik was a challenging but rewarding experience. I am grateful for the opportunity to work on this project with my team and learn new technologies. It helped me grow as a developer and taught me valuable skills that I can apply to future projects.</p>
            `
        }
    ],
    [
        "earthly",
        {
            photoPath: "miniature-earthly.png",
            article: `
            <p>Developing a website requires careful planning and attention to detail. As a web developer and Applied Computer Science student, my task and goal was to create a landing page for an ecological organization using only plain <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, while making sure that the site was SEO-friendly and accessible to all users. This was a project that required me to stay true to the guidelines provided by my professor, which meant keeping things simple and avoiding any fancy technologies.</p>
            <p>The first step in the development process was to plan out the structure and content of the website. I researched similar ecological organizations to understand what content would be most relevant to users. I then created a wireframe to guide me as I began coding. </p>
            <p>Next, I focused on creating a well-organized and SEO-friendly HTML structure. I used semantic tags such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;main&gt;</code> to ensure that search engines could easily understand the content of the website. </p>
            <img src="/projects/earthly/1.png" alt="Contact form on Earthly website."/>
            <p>For the styling, I kept things simple and consistent. I used a color scheme that reflected the organization's mission and chose a readable font size and style. I also paid close attention to accessibility, ensuring that the website was easy to use for all users, including those with disabilities. </p>
            <p>Overall, creating this website required a balance between technical knowledge and creativity. I learned the importance of planning ahead, using semantic HTML, keeping things simple and accessible, and incorporating interactivity to enhance the user experience. </p>
            `
        }
    ]
]);

export default PROJECTS;