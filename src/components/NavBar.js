import React, { useEffect } from "react";

function navScroll() {
    const navigation = document.querySelector(".navigation");
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll - lastScroll > 0 && currentScroll > 200) {
            navigation.classList.add("scroll-down");
            navigation.classList.remove("scroll-up");
        } else {
            navigation.classList.add("scroll-up");
            navigation.classList.remove("scroll-down");
        }
        lastScroll = currentScroll;
    });
}

const NavBar = () => {
    useEffect(() => {
        navScroll()
    }, []);

    return (
        <nav className="navigation scroll-down">
            <div className="nav-container container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#dev">DEVELOPMENT</a></li>
                    <li><a href="#gallery">GALLERY</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
