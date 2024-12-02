import React from "react";

import "./containerPhoto.css"
import image from "../../icons/my-image.png"

const PhotoContainer:React.FC = () => {
    return (
        <div className="main-photo-container">
            <div className="photo-container">
                <img src={image} alt="my-image" />
            </div>
        </div>
    )
}

export  {PhotoContainer};