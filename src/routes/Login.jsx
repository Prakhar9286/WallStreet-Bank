import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";

export const Login = (props) => {
    const history = useNavigate();
    const [custId, setCustId] = useState(0);
    const [pass, setPass] = useState('');

    const handleLogin = async () => {
        if (!custId || !pass) {
        //   setErrorMessage('Please enter both email and password.');
          return;
        }
    
        const customer = {
          "custId" : custId,
          "password" : pass
        };
    
    try {
        const loginSuccess = await AuthenticationService.login(customer);
        // console.log('API response:', loginSuccess.data); // Add this line
        if (loginSuccess) {
            console.log("Login successful!")
        //   setSuccessMessage('Login successful. Redirecting...');
          setTimeout(() => {
            history("/"+custId+"/dashboard"); // navigates to product Component
          }, 500);
        } else {
          console.log('Invalid email or password.');
        }
      } catch (error) {
        console.error('Login error', error);
        // setErrorMessage('An error occurred during login.');
      }
      
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }

    return (
        <div className="loginform">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <label htmlFor="custId">Customer ID</label>
                <input value={custId} onChange={(e) => setCustId(e.target.value)}type="number" placeholder="Customer ID" id="custId" name="custId" required="true"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required="true"/>
                <Link className="submitbtn" onClick={handleLogin}>Log In</Link>
                <Link className="link-btn" to='/register'>Don't have an account? Register here</Link>
                {/* <Link className="link-btn" to='/forgotpassword'>Forgot Password</Link>
                <Link className="link-btn" to='/forgotuserid'>Forgot Username</Link> */}
            </form>
        </div>
    )
}