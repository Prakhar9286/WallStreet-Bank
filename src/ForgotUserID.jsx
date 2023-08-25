import React, { useState } from "react";
import './ForgotUserID.css';
import { useNavigate } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
const ForgotUserID = (props) => {
    const [accountNo, setAccountNo] = useState('');
    const [pass, setPass] = useState('');
    const history = useNavigate();
    const handleForgotUserId = async () => {
        try {
        //   console.log("Customer id",props.customerId)
          const response  = await AuthenticationService.forgotUserId(accountNo);
          console.log(response);
          return response;
        }catch(error) {
          console.log("Something went wrong while fetching transactions")
        }
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleForgotUserId(accountNo).then((response) => {
            console.log(response)
            alert("Your Customer ID is "+response);
            history("/login");
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Forgot User ID</h2>
            <form className="ForgotUserID-form" onSubmit={handleSubmit}>
                <label htmlFor="accountNo">Enter Account Number</label>
                <input value={accountNo} onChange={(e) => setAccountNo(e.target.value)}type="number" placeholder="************" id="accountNo" name="accountNo" />
                <label htmlFor="password">Enter OTP</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Proceed</button>
            </form>
          
        </div>
    )
}
export default ForgotUserID;