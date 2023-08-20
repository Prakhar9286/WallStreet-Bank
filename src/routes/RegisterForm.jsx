import { useState } from "react";
import "../styles/FormInput.css";

export const RegisterForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export const RegisterForm = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//     // const [firstName, setfirstName] = useState('');
//     // const [middleName, setmiddleName] = useState('');
//     // const [lastName, setlastName] = useState('');
//     // const [fatherName, setfatherName] = useState('');
//     // const [mobile, setMobile] = useState('');
//     // const [aadharNo, setaadharNo] = useState('');
//     // onst [firstName, setfirstName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" requiredTxt/>
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
//             <Link className="submitButton" to="basicinformation1">Log In</Link>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        
//     </div>
//     )
// }



