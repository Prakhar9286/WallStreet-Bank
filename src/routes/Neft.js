import React, {useState} from "react";
import styles from '../styles/Neft.module.css';

export default function Neft(){
    const [formData, setFormData] = useState({
        fromAcc: '',
        toAcc: '',
        amount:'',
        transactionDate:'',
        maturityInstruction:'',
        remark:'',
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData) =>({...prevData, [name]: value}));
    };
    

    const handleSave = () =>{
        console.log('Form data saved:', formData);
    };

    const handleReset=()=>{
        setFormData({
            fromAcc: '',
            toAcc: '',
            amount:'',
            transactionDate:'',
            maturityInstruction:'',
            remark:'',
        });
    };

    const handleContinue = ()=>{
        console.log('Continuing to the next step');
    };


    return (
        <div className={styles.neftform}>
            <h2>NEFT page</h2>
            <form>
            <label>
                From account:
                <input type="text" name="fromAcc" value={formData.fromAcc} className={styles.inputfield} onChange={handleChange}/>
                To account:
                <input type="text" name="toAcc" value={formData.toAcc} className={styles.inputfield} onChange={handleChange}/>
                Amount
                <input type="text" name="amount" value={formData.amount}  className={styles.inputfield} onChange={handleChange}/>
                Transaction Date
                <input type="text" name="transactionDate" value={formData.transactionDate}  className={styles.inputfield} onChange={handleChange}/>
                
                Remark
                <input type="text" name="remark" value={formData.remark}  className={styles.inputfield} onChange={handleChange}/>

            </label>

            Please note
            <br></br>
            1. Transactions will be executed on the next working day if they are scheduled for Sundays, National Holidays
            NEFT Holidays (as declared by RBI)
           <br></br> 2. Timings for NEFT: Monday - Saturday (except 2nd and 4th Saturday) 4:00 AM - 6:30 AM

            <div className={styles.buttoncontainer}>
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleReset}>Reset</button>
                <button type="button" onClick={handleContinue}>Continue</button>
            </div>
            </form>
        </div>
    );
}