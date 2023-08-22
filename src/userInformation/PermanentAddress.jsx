import { useState } from "react";
import "../styles/PermanentAddressForm.css";
import { PermanentAddressForm } from "./PermanentAddressForm"
import { Link } from "react-router-dom";

export const PermanentAddress = ({onSubmit}) => {
    const [values, setValues] = useState({
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        state: "",
        city: "",
        pincode: "",
        });

        const inputs = [
        {
            id: 1,
            name: "addressLine1",
            type: "text",
            errorMessage: "Mandatory field",
            label: "Address Line 1",
            required: true,
        },
        {
            id: 2,
            name: "addressLine2",
            type: "text",
            label: "Address Line 2",
            },
            {
            id: 3,
            name: "landmark",
            type: "text",
            label: "Landmark",
            },
        {
            id: 4,
            name: "state",
            type: "text",
            errorMessage: "Mandatory field",
            label: "State",
            required: true,
        },
        {
            id: 5,
            name: "city",
            type: "text",
            errorMessage: "Mandatory field",
            label: "City",
            required: true,
            },
        {
            id: 6,
            name: "pincode",
            type: "text",
            errorMessage: "Mandatory",
            label: "PIN Code",
            required: true,
        },
    ];    


  const handleSubmit = (e) => {
    e.preventDefault();
    const d = {
      "permanentAddress" : { ...values}
    }
    onSubmit(d);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="permanentaddressApp">
      <form className="permanentaddressform" onSubmit={handleSubmit}>
        <h2>Enter Permanent Address </h2>
        {inputs.map((input) => (
          <PermanentAddressForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link className="permanentaddressbutton" onClick={handleSubmit}>Submit</Link>
      </form>
      
    </div>
  );
};