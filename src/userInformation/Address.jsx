import { useState } from "react";
import "../styles/AddressForm.css";
import { AddressForm } from "./AddressForm"
import { Link } from "react-router-dom";

export const Address = (props) => {
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
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="addressApp">
      <form className="addressform" onSubmit={handleSubmit}>
        <h2> Enter Local Address </h2>
        {inputs.map((input) => (
          <AddressForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link className="addressbutton" to="/permanentaddress">Submit</Link>
      </form>
      
    </div>
  );
};