import { useState } from "react";
import "../styles/Register.css";
import { BasicInformationForm } from "./BasicInformationForm"
import { Link } from "react-router-dom";

export const BasicInformation = ({onNext}) => {
  const [values, setValues] = useState({
    fname: "",
    mname: "",
    lname: "",
    fathersName: "",
    mobile: "",
    aadharNo: "",
    dob: "",
    pan: "",
    title: "",
    mothersName: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      errorMessage: "Mandatory field",
      label: "First name",
      required: true,
    },
    {
        id: 2,
        name: "mname",
        type: "text",
        label: "Middle name",
      },
      {
        id: 3,
        name: "lname",
        type: "text",
        errorMessage: "Mandatory field",
        label: "Last name",
      },
    {
      id: 4,
      name: "fathersName",
      type: "text",
      errorMessage: "Mandatory field",
      label: "Fathers Name",
      required: true,
    },
    {
      id: 5,
      name: "mobile",
      type: "text",
      errorMessage: "Mandatory",
      label: "Mobile No.",
      required: true,
    },
    {
        id: 6,
        name: "aadharNo",
        type: "text",
        errorMessage: "Mandatory",
        label: "Aadhar No.",
        required: true,
      },
      {
        id: 7,
        name: "dob",
        type: "date",
        errorMessage: "Mandatory",
        label: "Date of Birth",
        required: true,
      },
      {
        id: 8,
        name: "panNo",
        type: "text",
        label: "PAN Number",
        required: true,
      },
      {
        id: 9,
        name: "title",
        type: "text",
        label: "Title",
      },
      {
        id: 10,
        name: "mothersName",
        type: "text",
        errorMessage: "Mandatory",
        label: "Mothers Name",
        required: true,
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = {
      "customer" : { ...values}
    }
    onNext(d);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="basicInformationApp">
      <form className="basicInformationform" onSubmit={handleSubmit}>
        <h2>Enter your details </h2>
        {inputs.map((input) => (
          <BasicInformationForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link className="basicInformationbutton1" onClick={handleSubmit}>Submit</Link>
      </form>
      
    </div>
  );
};
