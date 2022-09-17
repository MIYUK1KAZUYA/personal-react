import React, { useState } from "react";
import Image from "./Image";

const Gallery = () => {
    const [img, setImg] = useState(0)
    const images = [<img src={require('../img/profile.JPG')} />, <img src={require('../img/IMG_2797.jpg')} />];

    function handleClick(n) {
        if (img + n < 0) {
            setImg(images.length - 1);
            return
        }
        if (img + n >= images.length) {
            setImg(0)
            return
        }
        setImg(img + n)
    }

    return (
        <div id="gallery" className="image-section">
            <div className="image-container container"> 
                <Image img = {images[img]}/>
                <span className="prev-arrow" onClick={() => handleClick(-1)}>&lt;</span>
                <span className="next-arrow" onClick={() => handleClick(1)}>&gt;</span>
            </div> 
        </div>
    );
};

export default Gallery;
