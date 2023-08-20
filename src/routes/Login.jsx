import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="loginform">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required="true"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required="true"/>
                <Link className="submitbtn" to="/netbanking">Log In</Link>
                <Link className="link-btn" to='/register'>Don't have an account? Register here</Link>
            </form>
        </div>
    )
}