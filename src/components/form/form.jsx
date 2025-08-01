import styles from "./form.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import currencyCode from "../../StaticData/currencyCodeNames";

function Form({ means }) {
  const color=useSelector((state)=>(state.toggle.color))
  const [code,setCode] = useState(currencyCode);

  function onSubmit(e){
    e.preventDefault();
    console.log(e.target.from.value)
    console.log(e.target.to.value)
    console.log(e.target.amount.value)
  }

  return (
    <div id={styles.formContainer} >
      <form className={styles.currencyForm} onSubmit={(e)=>onSubmit(e)}>
        <div className={styles.dropdownGroup}>
          <div className={styles.selectWrapper}>
            <label >From</label>
            <select name="from" className={styles.select}>
              {code.map((value, index) => (
                <option key={index}>{value[means]}</option>
              ))}
            </select>
          </div>

          <div className={styles.selectWrapper}>
            <label>To</label>
            <select name="to" className={styles.select}>
              {code.map((value, index) => (
                <option key={index}>{value[means]}</option>
              ))}
            </select>
          </div>
        </div>

        <input type="number" name="amount" placeholder="Enter amount" className={styles.amountInput} />
        <button type="submit" style={{backgroundColor:`${color.FONT_COLOR }`, color:`${color.BG_COLOR}`}} className={styles.convertBtn}>Convert</button>
      </form>
    </div>
  );
}

export default Form;
