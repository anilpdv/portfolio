import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Redux Toolkit",
    "React Query",
    "Zustand",
    "Node.js"
];

const labelsSecond = [
    "Git",
    "Docker",
    "Jest",
    "React Testing Library",
    "Cypress",
    "Datadog",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Microservices"
];

const labelsThird = [
    "Dart",
    "Go",
    "Rust",
    "Python",
    "React Native",
    "Microfrontend Architecture",
    "Context API",
    "Socket.io"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Building modern, scalable web applications from frontend to backend. Started with backend development using Node.js and databases, then evolved into full stack engineering. I specialize in creating intuitive user interfaces with React/Next.js while architecting robust backend systems and APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Testing & DevOps</h3>
                    <p>Ensuring code quality through comprehensive testing strategies and modern DevOps practices. Experience with test-driven development, CI/CD pipelines, containerization, and monitoring tools to deliver reliable, scalable applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Multi-Language Development</h3>
                    <p>Versatile developer with experience across multiple programming languages and frameworks. From building mobile apps with React Native and Dart to creating CLI tools with Rust and Go, I adapt to the right tool for each project.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;