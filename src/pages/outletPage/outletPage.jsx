import { Outlet } from "react-router";
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg";
import { useSelector,useDispatch } from "react-redux";
import { bgColor,fontColor } from "../../redux/reduxActions/toggleColorActions/toggleColorActions";
import styles from "./outletPage.module.css";
import DefaultPage from "../../components/defaultPage/DefaultPage";
import { useLocation } from "react-router";
import { useState } from "react";

function OutletPage(){
    // const [toggle,setToggle]=useState("light")
    const color=useSelector((state)=> state.toggle.color)
    const dispatch=useDispatch();
    const location = useLocation();

    // console.log(location.pathname)
    function handleColor(){
       if(color.BG_COLOR=="black"){
        dispatch(bgColor({value:"white"}))
        dispatch(fontColor({value:"black"}))
       }else {
        dispatch(bgColor({value:"black"}))
        dispatch(fontColor({value:"white"}))
       }
    }

    return (
        
        <div id={styles.OutletPage } style={{backgroundColor:`${color.BG_COLOR} `, color:`${color.FONT_COLOR}`}} >
            
            <div id={styles.header}>
                <div className={`${styles.headerContainer} ${styles.leftHeaderContainer} `}>
                    <span>Currency - Converter</span>
                </div>
                <div className={`${styles.headerContainer} ${styles.rightHeaderContainer} `}>
                    <img id={styles.toggle} onClick={handleColor} src={color.BG_COLOR=="black"?sun:moon}  alt="" />
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