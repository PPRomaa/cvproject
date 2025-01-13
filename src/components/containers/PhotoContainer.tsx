import React from "react";

import image from "../../assets/images/my-image.png"
import "./containerPhoto.css"

const PhotoContainer:React.FC = () => {
    return (
        <section className="main-photo-container">
            <div className="photo-container">
                <img src={image} alt="my-image" />
            </div>
        </section>
    )
}

export  {PhotoContainer};