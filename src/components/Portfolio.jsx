import React from 'react';
import Project from './Project';

const Portfolio = () => {
    const projects = [
        { title: 'Icebreaker Station', deployedLink: 'https://valyastriz.github.io/Icebreaker-Station/', githubLink: 'https://github.com/valyastriz/Icebreaker-Station' },
        { title: 'Bored Game Generator', deployedLink: 'https://bored-game-generator.onrender.com/', githubLink: 'https://github.com/ajwmp93/Bored-Game-Generator' },
    ];

    return (
        <section id="portfolio">
            {projects.map((project, index) => (
                <Project key={index} title={project.title} deployedLink={project.deployedLink} githubLink={project.githubLink} />
            ))}
        </section>
    );
};

export default Portfolio;
