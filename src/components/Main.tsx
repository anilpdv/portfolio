import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/profile-pic.jpg`} alt="Anil Palli" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/anilpdv" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anilpdv" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hi, I am Anil Palli</h1>
          <p className="bio-text">
            I am a full stack developer with 6 years of experience working on various projects.
            I love creating applications, solving problems, and contributing to enhance the
            experience of every journey I embark on.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/anilpdv" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anilpdv" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;