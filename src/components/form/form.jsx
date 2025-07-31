import styles from "./form.module.css";
import { useState } from "react";
import currencyCode from "../../StaticData/currencyCodeNames";

function Form({ means }) {
  const [code] = useState(currencyCode);

  return (
    <div id={styles.formContainer}>
      <form className={styles.currencyForm}>
        <div className={styles.dropdownGroup}>
          <div className={styles.selectWrapper}>
            <label >From</label>
            <select>
              {code.map((value, index) => (
                <option key={index}>{value[means]}</option>
              ))}
            </select>
          </div>

          <div className={styles.selectWrapper}>
            <label>To</label>
            <select>
              {code.map((value, index) => (
                <option key={index}>{value[means]}</option>
              ))}
            </select>
          </div>
        </div>

        <input type="number" placeholder="Enter amount" className={styles.amountInput} />
        <button type="submit" className={styles.convertBtn}>Convert</button>
      </form>
    </div>
  );
}

export default Form;
