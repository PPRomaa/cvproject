import React, { useState, useEffect } from "react";
import "./preloader.css";
import {useVisibility} from "../../hooks";

const Preloader = () => {
    const {setIsVisible} = useVisibility();
    const [shouldRender, setShouldRender] = useState(true);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        const fakeLoader = new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 1000);
        });

        fakeLoader.finally(() => {
            setTimer(true)
        });
    }, []);
    useEffect(() => {
        if (timer) {
            const time = setTimeout(() => {
                setIsVisible(false)
                setShouldRender(false)
            }, 1000);
            return () => clearTimeout(time)
        }
    }, [timer,setIsVisible]);

    if (!shouldRender) return null;

    return (
        <>
            {shouldRender && (
                <div className={`Preloader-container ${timer ? "hide" : ""}`}>

                </div>
            )}
        </>
    );
};

export default Preloader;
