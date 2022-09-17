import React from "react";

const Gallery = () => {
    return (
        <div id="gallery" className="image-section">
            <div className="image-container container"> 
                <div className="image-thumbnail" style={{ display: 'none' }} >
                    <img src={require('../img/profile.JPG')} />
                </div>
                <div className="image-thumbnail">
                    <img src={require('../img/IMG_2797.jpg')} />
                </div>
                <span className="prev-arrow" >&lt;</span>
                <span className="next-arrow" >&gt;</span>
            </div> 
        </div>
    );
};

export default Gallery;
