import React, { useState } from "react";
import "../styles/AdminUserWithdrawal.css";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Navbar from "../components/Navbar.jsx";

export const AdminUserWithdrawal = (props) => {
    // const [customerId, setCustomerId] = usestate('');
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
        // console.log(email);
    }

    return (
        <>
        <div>
            <h2 className="PaymentTitle"> Admin User Account Section</h2>
        </div>
        <AdminSidebar />
        <div className="withdrawalForm">
            <form className="withdrawal-form" >
                <h4 className="title">Admin Money Withdrawal</h4>
                <label className="field1" htmlFor="accountNo">Acount Number</label>
                <input value={accountNo} onChange={(e) => setAccountNo(e.target.value)} type="text"  id="account" name="Account No" required="true"/>
                <label className="field2" htmlFor="amount">Amount</label>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text"  id="amount" name="Amount" required="true"/>
                <Link className="Adminsubmitbtn" >Submit</Link>
            </form>
        </div>
        </>
    )
}
