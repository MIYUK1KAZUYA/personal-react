import React, { useEffect } from "react";

function reveal() {
    const about = document.querySelector(".about");
    const windowHeight = window.innerHeight;
    const aboutTop = about.getBoundingClientRect().top;
    const elementVisible = 150;
  
    if (aboutTop < windowHeight - elementVisible) {
      about.classList.add("active");
    } else {
      about.classList.remove("active");
    }
}

const About = () => {
    useEffect(() => {
        window.addEventListener("scroll", reveal);
    },[]);

    return (
        <div id="about" className="about-section">
            <div className="about-container container">
                <h2>About me</h2>
                <div className="about">
                    <p><span className="color">Born</span> on April 9th, 1997. I am a highly motivated person with a passion for programming and development. 
                    I put lots of energy to learn new things and constantly improve in my performance. <br />
                    I definitely like to face new challenges, think from a new perspective, and work as a teamplayer.
                    My aim is to contribute to functional projects and work in a promising environment.
                    </p>
                    <ul>
                        <li>
                            <p className="degree">Bachelor's degree</p>
                            <p>Air Transport<br /><span className="color">-</span> at <span className="color">-</span><br />Czech Technical University</p>  
                        </li>
                        <li>
                            <p className="degree">Master's degree</p>
                            <p>Air Traffic Control and Management<br /><span className="color">-</span> at <span className="color">-</span><br />Czech Technical University</p>
                        </li>
                    </ul>
                </div>
                <div className="anime">
                    <img className="ac" src={require('../img/aircraft.jpg')} />
                </div>
            </div>
        </div>
    );
};

export default About;
