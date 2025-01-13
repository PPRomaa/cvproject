import React, { useState, useEffect } from "react";
import {useVisibility} from "../../hooks";
import "./preloader.css";

const Preloader:React.FC = () => {
    const {setIsVisible} = useVisibility();
    const [shouldRender, setShouldRender] = useState<boolean>(true);
    const [timer, setTimer] = useState<boolean>(false);

    useEffect(() => {
        const fakeLoader = new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 600);
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
            }, 600);
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
