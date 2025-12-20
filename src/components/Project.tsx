import React from "react";
import '../assets/styles/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faTerminal, faBook, faHome, faFileLines, faMusic, faDownload, faQuoteLeft, faCode, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faTerminal} size="3x" className="project-icon"/>
                </div>
                <a href="https://github.com/anilpdv/quotes-cli" target="_blank" rel="noreferrer"><h2>Quotes CLI</h2></a>
                <div className="project-badges">
                    <span className="badge"><FontAwesomeIcon icon={faGithub} /> 7 stars</span>
                    <span className="badge"><FontAwesomeIcon icon={faNpm} /> npm package</span>
                </div>
                <p>A command line interface for getting random quotes by search, tag, and popularity. Published on npm with 7 GitHub stars. Features bulk fetch, smart search, and tagged quotes. Built with Node.js and JavaScript.</p>
                <div className="project-links">
                    <a href="https://github.com/anilpdv/quotes-cli" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.npmjs.com/package/quotes-cli" target="_blank" rel="noreferrer">npm Package</a>
                </div>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faVideo} size="3x" className="project-icon"/>
                </div>
                <a href="https://daydubs.com" target="_blank" rel="noreferrer"><h2>DayDubs</h2></a>
                <p>An innovative video dubbing application that converts videos into user-selected audio languages. Features subtitle generation, multi-language dubbing, and audio synchronization. Built with Next.js, TypeScript, and video processing APIs.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faHome} size="3x" className="project-icon"/>
                </div>
                <a href="https://partner.zumin.ca" target="_blank" rel="noreferrer"><h2>Zumin Connect</h2></a>
                <p>A customer-facing portal for real estate agents and clients to manage services and communications. Implemented role-based access control for Admin, Partner, and Client user types with React, TypeScript, and React Query.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faBook} size="3x" className="project-icon"/>
                </div>
                <a href="https://github.com/anilpdv/ebook_viewer_project" target="_blank" rel="noreferrer"><h2>eBook Viewer</h2></a>
                <p>A modern ebook reading application built with Dart and Flutter. Allows users to read any book with a clean, intuitive interface optimized for digital reading across multiple platforms.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faDownload} size="3x" className="project-icon"/>
                </div>
                <a href="https://github.com/anilpdv/video-downloader-dioxus" target="_blank" rel="noreferrer"><h2>Video Downloader</h2></a>
                <p>A desktop application for downloading videos and MP3 files built with Rust and Dioxus framework. Provides a fast, memory-efficient solution for media downloading with a native-like user experience.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faMusic} size="3x" className="project-icon"/>
                </div>
                <a href="https://github.com/anilpdv/musiq-app" target="_blank" rel="noreferrer"><h2>Musiq App</h2></a>
                <p>A music streaming and download application built with JavaScript. Enables users to listen to and download songs with an intuitive interface and seamless playback experience.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="project-icon"/>
                </div>
                <a href="https://github.com/anilpdv/quotesrestapi-refactor" target="_blank" rel="noreferrer"><h2>Quotes REST API</h2></a>
                <p>A refactored REST API for quotes management built with Go. Provides efficient endpoints for retrieving, searching, and managing inspirational quotes with modern Go best practices.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faCode} size="3x" className="project-icon"/>
                </div>
                <h2>Byjus Coding Platform</h2>
                <p>Interactive coding education platform developed with React.js, Next.js, and TypeScript. Integrated React Query with Firestore for efficient data fetching, serving thousands of concurrent users with optimized performance.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faChartLine} size="3x" className="project-icon"/>
                </div>
                <h2>HCUBE Data Pipeline Tool</h2>
                <p>Data analytics pipeline automation tool with intuitive React.js interface for visualizing and managing complex data workflows. Integrated JsPlumb for dynamic pipeline diagrams, reducing setup time by 25%.</p>
            </div>
            <div className="project">
                <div className="project-icon-wrapper">
                    <FontAwesomeIcon icon={faFileLines} size="3x" className="project-icon"/>
                </div>
                <a href="https://github.com/doc-han/LibGenesis" target="_blank" rel="noreferrer"><h2>LibGenesis (Contributor)</h2></a>
                <div className="project-badges">
                    <span className="badge"><FontAwesomeIcon icon={faGithub} /> 53 stars</span>
                    <span className="badge">11 forks</span>
                </div>
                <p>Contributed to an API workaround for the Library Genesis platform to enable query search functionality. Built with JavaScript, this open-source project has gained significant community traction.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;