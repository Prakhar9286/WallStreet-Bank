import React, { useState} from 'react';
import { RegisterForm }from './RegisterForm';
import { Login } from './Login';

export const Register = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return(
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />
      }
    </div>
    );
}