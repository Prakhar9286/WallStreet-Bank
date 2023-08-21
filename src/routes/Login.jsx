import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = async () => {
        if (!email || !pass) {
        //   setErrorMessage('Please enter both email and password.');
          return;
        }
    
        const customer = {
          "email" : email,
          "password" : pass
        };
    
    try {
        const loginSuccess = await AuthenticationService.login(customer);
        console.log('API response:', loginSuccess.data); // Add this line
        if (loginSuccess) {
            console.log("Login successful!")
        //   setSuccessMessage('Login successful. Redirecting...');
        //   setTimeout(() => {
        //     history('/netbanking'); // navigates to product Component
        //   }, 2000);
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
        console.log(email);
    }

    return (
        <div className="loginform">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required="true"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required="true"/>
                <Link className="submitbtn" onClick={handleLogin}>Log In</Link>
                <Link className="link-btn" to='/register'>Don't have an account? Register here</Link>
            </form>
        </div>
    )
}