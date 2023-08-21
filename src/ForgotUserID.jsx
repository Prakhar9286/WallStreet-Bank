import React, { useState } from "react";
import './ForgotUserID.css';

export const ForgotUserID = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Forgot User ID</h2>
            <form className="ForgotUserID-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Account Number</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="************" id="email" name="email" />
                <label htmlFor="password">Enter OTP</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Proceed</button>
            </form>
          
        </div>
    )
}