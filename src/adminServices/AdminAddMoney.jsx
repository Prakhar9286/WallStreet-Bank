import React, { useState } from "react";
//import "../styles/login.css";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [customerId, setCustomerId] = usestate('');
    const [accountNo, setAccountNo] = useState('');
    const [amount, setAmount] = useState('');

    // const handleTransaction = async () => {
    //     if (!customerId || !accountNo || !amount) {
    //     //   setErrorMessage('Please enter both email and password.');
    //       return;
    //     }
    
    //     const customer = {
    //       "customerId" : customerId,
    //       "password" : pass
    //     };
    
    // try {
    //     const loginSuccess = await AuthenticationService.login(customer);
    //     console.log('API response:', loginSuccess.data); // Add this line
    //     if (loginSuccess) {
    //         console.log("Login successful!")
    //     //   setSuccessMessage('Login successful. Redirecting...');
    //     //   setTimeout(() => {
    //     //     history('/netbanking'); // navigates to product Component
    //     //   }, 2000);
    //     } else {
    //       console.log('Invalid email or password.');
    //     }
    //   } catch (error) {
    //     console.error('Login error', error);
    //     // setErrorMessage('An error occurred during login.');
    //   }
      
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="loginform">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Admin Transactions</h2>
                <label htmlFor="customerId">Customer Id</label>
                <input value={customerId} onChange={(e) => setCustomerId(e.target.value)}type="text"  id="customerId" name="Customer Id" required="true"/>
                <label htmlFor="accountNo">Acount Number</label>
                <input value={accountNo} onChange={(e) => setAccountNo(e.target.value)} type="text"  id="account" name="Account No" required="true"/>
                <label htmlFor="amount">Amount</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text"  id="amount" name="Amount" required="true"/>
                <Link className="submitbtn" onClick={handleLogin}>Submit</Link>
            </form>
        </div>
    )
}
