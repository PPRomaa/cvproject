import {useEffect, useState} from "react";

import "./circle-preloader.css";

interface IProps {
    isNotFound?: boolean;
}

const CirclePreloader:React.FC<IProps> = ({isNotFound}) => {
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const loader = setTimeout(()=>{
            setLoading(false);
        },800)
        return () => clearTimeout(loader)
    }, []);

    if (isNotFound) {
        return <span className="loading line"></span>
    }

    return loading ? (
        <div className="circle-preloader">
            <span className="loading line"></span>
        </div>
    ) : null
}


export { CirclePreloader }