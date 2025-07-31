import { Outlet } from "react-router";
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg";
import styles from "./outletPage.module.css";
import DefaultPage from "../../components/defaultPage/DefaultPage";
import { useLocation } from "react-router";
import { useState } from "react";

function OutletPage(){
    const [toggle,setToggle]=useState("light")
    const location = useLocation();

    // console.log(location.pathname)
    function handleColor(){
       if(toggle=="dark"){
        setToggle("light")
       }else {
        setToggle("dark")
       }
    }

    return (
        
        <div id={styles.OutletPage } className={toggle=="dark"?styles.light:styles.dark}>
            
            <div id={styles.header}>
                <div className={`${styles.headerContainer} ${styles.leftHeaderContainer} `}>
                    <span>Currency - Converter</span>
                </div>
                <div className={`${styles.headerContainer} ${styles.rightHeaderContainer} `}>
                    <img id={styles.toggle} src={toggle=="dark"?moon:sun}  onClick={handleColor} alt="" />
                </div>
            </div>
        <div id={styles.content}>
            {location.pathname=="/converter"?
             <Outlet></Outlet>:
             <DefaultPage></DefaultPage>
        }
        </div>
        
    
        </div>
    )
}

export default OutletPage;