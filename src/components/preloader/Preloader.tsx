import React, { useState, useEffect } from "react";
import {useVisibility} from "../../hooks";
import "./preloader.css";

const Preloader:React.FC = () => {
    const {setIsVisible} = useVisibility();
    const [shouldRender, setShouldRender] = useState<boolean>(true);
    const [timer, setTimer] = useState<boolean>(false);

    useEffect(() => {
        const fakeLoader = new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 700);
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
            }, 800);
            return () => clearTimeout(time)
        }
    }, [timer,setIsVisible]);

    if (!shouldRender) return null;

    return (
        <>
            {shouldRender && (
                <div className={`Preloader-container`}>
                </div>
            )}
        </>
    );
};

export default Preloader;
