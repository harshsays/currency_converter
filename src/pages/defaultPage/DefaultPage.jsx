import { useEffect, useState } from "react";
import styles from "./Default.module.css";
import defaultData from "./DefaultPageContent";
import { Link } from "react-router";


function DefaultPage(){
    const [data,setdata]=useState(defaultData);
    const [count,setCount]=useState(0);

    useEffect(()=>{
         const interval = setInterval(() => {
             setCount(prev => (prev === 7 ? 0 : prev + 1));
            
    }, 3000); 

    return () => clearInterval(interval); 
  
    },[])

    return (
        <div id={styles.default}>
            <div id={styles.default_container}>
                <span>{data[count].first}</span>
                <span>{data[count].second}</span>
                <span>{data[count].third}</span>
                <hr />
                <hr />
                <hr /><hr /><hr />
                <Link to="/converter">GET STARTED</Link>
            </div>
        </div>
    )
}

export default DefaultPage;