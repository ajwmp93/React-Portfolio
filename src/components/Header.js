import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ currentSection }) => {
    return (
        <header>
            <h1>Ashley Wright's Portfolio</h1>
            <nav>
                {['About Me', 'Portfolio', 'Contact', 'Resume'].map((title) => (
                    <Link key={title} to={title.toLowerCase()} className={currentSection === title.toLowerCase() ? 'active' : ''}>
                        {title}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;