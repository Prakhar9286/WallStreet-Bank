import React, {useState} from "react";
import styles from './Neft.module.css'
import AuthenticationService from "../services/AuthenticationService";


export default function Neft(){
    const [formData, setFormData] = useState({
        fromAc: '',
        toAc: '',
        amount:'',
        date:'',
        maturityInstruction:'',
        remarks:'',
        transactionTypeId : "NEFT"
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
            fromAc: '',
            toAc: '',
            amount:'',
            date:'',
            maturityInstruction:'',
            remarks:'',
        });
    };
    const handleTransaction = async () => {
        if (!formData.amount || !formData.fromAc || !formData.toAc) {
        //   setErrorMessage('Please enter both email and password.');
          return;
        }
    
        // const customer = {
        //   "custId" : custId,
        //   "password" : pass
        // };
    
    try {
        const loginSuccess = await AuthenticationService.executeTransaction(formData);
        // console.log('API response:', loginSuccess.data); // Add this line
        if (loginSuccess) {
            console.log("Login successful!")
        //   setSuccessMessage('Login successful. Redirecting...');
        //   setTimeout(() => {
        //     history("/"+custId+"/openAccount"); // navigates to product Component
        //   }, 500);
        } else {
          console.log('Invalid email or password.');
        }
      } catch (error) {
        console.error('Login error', error);
        // setErrorMessage('An error occurred during login.');
      }
      
      };
    const handleContinue = ()=>{
        console.log('Continuing to the next step');
        handleTransaction();
    };


    return (
        <div className={styles.neftform}>
            <h2>NEFT page</h2>
            <form>
            <label>
                From account:
                <input type="text" name="fromAc" value={formData.fromAc} className={styles.inputfield} onChange={handleChange}/>
                To account:
                <input type="text" name="toAc" value={formData.toAc} className={styles.inputfield} onChange={handleChange}/>
                Amount
                <input type="text" name="amount" value={formData.amount}  className={styles.inputfield} onChange={handleChange}/>
                Transaction Date
                <input type="text" name="date" value={formData.date}  className={styles.inputfield} onChange={handleChange}/>
                
                Remark
                <input type="text" name="remarks" value={formData.remarks}  className={styles.inputfield} onChange={handleChange}/>

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