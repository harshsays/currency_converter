import styles from "./form.module.css";
import Loading from "../loading/loading";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import currencyCode from "../../StaticData/currencyCodeNames";

function Form({ means }) {
  const color = useSelector((state) => state.toggle.color);
  const [formData, setFormData] = useState({ from: "AED", to: "AED", amount: "empty" });
  const [index,setIndex]=useState({from :"",to:""});
  const [answer,setAnswer]=useState("")
  const [submit, setSubmit] = useState(true);
  const [code, setCode] = useState(currencyCode);

  useEffect(()=>{
    async function getData(){
      try{
        const {from,to,amount}=formData;

        if(amount==="empty"){
          return ;
        }

        
       setAnswer(null)
        const response= await fetch(`https://v6.exchangerate-api.com/v6/a0edccc2e622ba01bdc07bff/pair/${currencyCode[index.from].code}/${currencyCode[index.to].code}/${amount}`);
        const data= await response.json();
        data.result==="success"?setAnswer(data.conversion_result):setAnswer("Something Wrong . Try later")
      }catch(err){
        return;
      }
    }
    getData();
  },[submit])

  function handleSubmit(e){
    e.preventDefault();
    setIndex({from:e.target.from.selectedIndex,to:e.target.to.selectedIndex})
    setSubmit(!submit);
  }

  return (
    <div id={styles.formContainer}>
      <form className={styles.currencyForm} onSubmit={(e)=> handleSubmit(e)}>
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
                <option   key={index}>{ value[means]}</option>
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
          
          onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
          type="number"
          name="amount"
          placeholder="Enter amount"
          className={styles.amountInput}
        />
        <button
          type="submit"
          style={{ backgroundColor: `${color.FONT_COLOR}`, color: `${color.BG_COLOR}` }}
          className={styles.convertBtn}
        >
          Convert
        </button>
        {answer!=null?<span>{answer}</span>:<Loading></Loading>}
      </form>
      
    </div>
  );
}

export default Form;
