import styles from "./currencyConvert.module.css";
import Form from "../../components/form/form";
import { useSelector } from "react-redux";
import currencyCode from "../../StaticData/currencyCodeNames";
import { useState } from "react";
function CurrencyConvert(){
    const [means,setMeans]=useState("code");
    const color=useSelector((state)=>(state.toggle.color))

    function chngeMeans(means){
        setMeans(means)
    }

    return (
        <div id={styles.container}>
            <div id={styles.Container}>
                <Form means={means}></Form>
            </div>
            <div style={{marginTop:"5rem"}}>
            <button className={styles.convertBtn} style={{backgroundColor:`${color.BG_COLOR }`, color:`${color.FONT_COLOR}`}} onClick={()=>chngeMeans("name")}>Search By Currency name</button>
            <button className={styles.convertBtn} style={{backgroundColor:`${color.BG_COLOR }`, color:`${color.FONT_COLOR}`}} onClick={()=>chngeMeans("code")}>Search By currency code</button>
            <button className={styles.convertBtn} style={{backgroundColor:`${color.BG_COLOR }`, color:`${color.FONT_COLOR}`}} onClick={()=>chngeMeans("country")}>Search By Country name</button>
            </div>
            
        </div>
    )
}

export default CurrencyConvert;