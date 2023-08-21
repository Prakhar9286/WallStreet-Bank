import { useState } from "react";
import "../styles/Register.css";
import { RegisterForm } from "./RegisterForm";
import { Link } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";
export const Register = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];


  const handleRegister = async () => {
    if (!values.email || !values.password) {
    //   setErrorMessage('Please enter both email and password.');
      return;
    }

    const customer = {
      "email" : values.email,
      "password" : values.password
    };

try {
    const registerSuccess = await AuthenticationService.registerDealer1(customer);
    console.log('API response:', registerSuccess.data); // Add this line
    if (registerSuccess) {
        console.log("Register successful!")
    //   setSuccessMessage('Login successful. Redirecting...');
    //   setTimeout(() => {
    //     history('/netbanking'); // navigates to product Component
    //   }, 2000);
    } else {
      console.log('Invalid email or password.');
    }
  } catch (error) {
    console.error('Register error', error);
    // setErrorMessage('An error occurred during login.');
  }
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <RegisterForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link className="button1" onClick={handleRegister}>Submit</Link>
        <Link className="button2" to="/login">Already a user ? Sign-in</Link>
      </form>
      
    </div>
  );
};


// export default Register;

// import React, { useState} from 'react';
// import { RegisterForm }from './RegisterForm';
// import { Login } from './Login';

// export const Register = () => {
//     const [currentForm, setCurrentForm] = useState('login');

    // const toggleForm = (formName) => {
    //     setCurrentForm(formName);
    // }

//     return(
//     <div className="App">
      // {
      //   currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />
      // }
//     </div>
//     );
// }