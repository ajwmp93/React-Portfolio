import React from 'react';

const Project = ({ title, deployedLink, githubLink }) => {
    return (
        <div>
            <h2>{title}</h2>
            <a href={deployedLink}>View Deployed App</a>
            <a href={githubLink}>View on GitHub</a>
        </div>
    );
};

export default Project;
