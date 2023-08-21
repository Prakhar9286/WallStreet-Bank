import React, { useState } from "react";
import './ForgotPassword.css';

export const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>ForgotPassword</h2>
            <form className="ForgotPassword-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Enter User ID</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="************" id="email" name="email" />
                <label htmlFor="password">Enter OTP</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Proceed</button>
            </form>
          
        </div>
    )
}