import React from "react";

import "./containerPhoto.css"
import image from "../../assets/images/my-image.png"

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