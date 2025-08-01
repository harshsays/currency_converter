import styles from "./form.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import currencyCode from "../../StaticData/currencyCodeNames";

function Form({ means }) {
  const color = useSelector((state) => state.toggle.color);
  const [formData, setFormData] = useState({ from: "AED", to: "AED", amount: 0 });
  const [answer,setAnswer]=useState("")
  const [submit, setSubmit] = useState(true);
  const [code, setCode] = useState(currencyCode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { from, to, amount } = formData;
        const response = await fetch(`https://v6.exchangerate-api.com/v6/a0edccc2e622ba01bdc07bff/pair/${from}/${to}/${amount}`);

        const data = await response.json();
        setFormData(pre => ({...pre , amount:0}))
        setAnswer(data.conversion_result)
        if (data.result === "success") {
          // console.log("Conversion Result:", data.conversion_result);
          // Optionally: show result in UI
        } else {
          // console.error("Error fetching conversion:", data.error_type || data);
        }
      } catch (error) {
        console.error("Network Error:", error);
      }
    };

    fetchData();
  }, [submit]); // Runs every time `submit` is toggled

  return (
    <div id={styles.formContainer}>
      <form className={styles.currencyForm}>
        <div className={styles.dropdownGroup}>
          <div className={styles.selectWrapper}>
            <label>From</label>
            <select
              value={formData.from}
              onChange={(e) => setFormData((prev) => ({ ...prev, from: e.target.value }))}
              name="from"
              className={styles.select}
            >
              {code.map((value, index) => (
                <option key={index}>{value[means]}</option>
              ))}
            </select>
          </div>

          <div className={styles.selectWrapper}>
            <label>To</label>
            <select
              value={formData.to}
              onChange={(e) => setFormData((prev) => ({ ...prev, to: e.target.value }))}
              name="to"
              className={styles.select}
            >
              {code.map((value, index) => (
                <option key={index}>{value[means]}</option>
              ))}
            </select>
          </div>
        </div>

        <input
          value={formData.amount}
          onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
          type="number"
          name="amount"
          placeholder="Enter amount"
          className={styles.amountInput}
        />
        <button
          type="button"
          onClick={() => setSubmit(!submit)}
          style={{ backgroundColor: `${color.FONT_COLOR}`, color: `${color.BG_COLOR}` }}
          className={styles.convertBtn}
        >
          Convert
        </button>
        <span>{answer}</span>
      </form>
      
    </div>
  );
}

export default Form;
