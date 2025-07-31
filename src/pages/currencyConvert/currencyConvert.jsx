import styles from "./currencyConvert.module.css";
import Form from "../../components/form/form";
import currencyCode from "../../StaticData/currencyCodeNames";
import { useState } from "react";
function CurrencyConvert(){
    const [means,setMeans]=useState("code")

    function chngeMeans(means){
        setMeans(means)
    }
    return (
        <div id={styles.container}>
            <div id={styles.Container}>
                <Form means={means}></Form>
            </div>
            <div style={{marginTop:"5rem"}}>
                <button onClick={()=>chngeMeans("name")}>Search By Currency name</button>
            <button onClick={()=>chngeMeans("code")}>Search By currency code</button>
            <button onClick={()=>chngeMeans("country")}>Search By Country name</button>
            </div>
            
        </div>
    )
}

export default CurrencyConvert;