import React, { useEffect } from "react";

function reveal() {
    const development = document.querySelector(".text-area");
    const windowHeight = window.innerHeight;
    const devTop = development.getBoundingClientRect().top;
    const elementVisible = 150;
  
    if (devTop < windowHeight - elementVisible) {
      development.classList.add("active");
    } else {
      development.classList.remove("active");
    }
}

const Dev = () => {
    useEffect(() => {
        window.addEventListener("scroll", reveal);
    }, []);

    return (
        <div id="dev" className="dev-section">
            <div className="dev-container container">
                <h2>Development</h2>
                <div className="informary">
                    <p>
                        I've been passionate about computers ever since I was a child. 
                        As this domain remains as an essential part of our lives, I would like to be part of it's development. 
                        I have taken several programming classes in college and I've put hundreds of hours into online courses and learning. 
                        I believe this has given me all essential tools to pursue my career as front-end developer.
                        My diploma thesis was devoted to analysis of aircraft parking during Covid-19. 
                        For this purpose, I have written a Python script that filters fetched aircraft data  and formats them for further processing.
                    </p>
                </div>
                <h3>Certificates</h3>
                <div className="text-area">
                    <div className="text-box">
                        <h4>Front-End Engineer Career Path</h4>
                        <p>
                            This 300+ hours online course on Codecademy represents the ignition of my front-end path. 
                            Here I learned the markups of HTML, CSS, Javascript, React and Redux complemented with UI and UX design.
                        </p>
                    </div>
                    <div className="text-box">
                        <h4>Computer Science Career Path</h4>
                        <p>
                            This complex course on Codecademy introduced fundamental methods of programming, essential Data Structures and Algorithms,
                            Databases and mathematics of computer science.
                        </p>
                    </div>
                    <div className="text-box">
                        <h4>Modern React with Redux</h4>
                        <p>
                            This course on Udemy represents modern tools to build dynamic web apps using React and Redux. Part of this course 
                        </p>
                    </div>
                    <div className="text-box">
                        <h4>The Complete Python Pro Bootcamp for 2022</h4>
                        <p>
                            Automation, game, app and web development, data science and machine learning using Python. Learned to use Python for data science and machine learning.
                        </p>
                    </div>
                    <div className="text-box">
                        <h4>Learn JavaScript Course</h4>
                        <p>
                            Programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax.
                        </p>
                    </div>
                    <div className="text-box">
                        <h4>Intermediate JavaScript Course</h4>
                        <p>
                            Deeper understanding of how JavaScript runs in the browser including currying, hoisting, and concurrency. 
                            Classes, modules and asynchronous functions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dev;
