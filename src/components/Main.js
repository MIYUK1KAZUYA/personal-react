import React, { useEffect } from "react";

function mainLoad() {
    const avatar = document.querySelector(".avatar");
    const intro = document.querySelector(".intro");
    const navigation = document.querySelector(".navigation");
    setTimeout(() => {
        avatar.classList.remove('fade');
        setTimeout(() => {
        navigation.classList.remove('scroll-down');
        intro.classList.remove('fade');
        }, 500);
    }, 600);
}

const Main = () => {
    useEffect(() => {
        mainLoad()
    }, []);

    return (
        <div className="main-section">
            <div className="main-container container">
                <img className="avatar fade" src={require('../img/background.JPG')} />
                <div className="intro fade">
                    <h2>This is</h2>
                    <h1>MARTIN <br/> POSPISIL</h1>
                    <p>Welcome to my website. This project represents some skills I've learned during my learning path. Feel free to scroll down for more content.</p>
                    <div className="scroll-arrows">
                        <a href="#about">
                            <img className="a1" src={require('../img/arrow-down.png')}/>
                            <img className="a2" src={require('../img/arrow-down.png')}/>
                            <img className="a3" src={require('../img/arrow-down.png')}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
