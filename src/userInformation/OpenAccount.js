import React, { useState } from 'react';
import { BasicInformation } from './BasicInformation';
import { Address } from './Address';
import {PermanentAddress} from './PermanentAddress';
import AuthenticationService from '../services/AuthenticationService';
import { useNavigate, useParams } from 'react-router-dom';
function OpenAccount() {
    const history = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const {customerId} = useParams();
    const handleOpenAccount = async (data) => {
    
    try {
        const openAccountSuccess = await AuthenticationService.openAccount(data,customerId);
        // console.log('API response:', openAccountSuccess.data); // Add this line
        if (openAccountSuccess) {
            console.log("Account opening successful!")
            alert("Account opening successful. Account No. : "+openAccountSuccess)
        //   setSuccessMessage('Login successful. Redirecting...');
          setTimeout(() => {
            history('/login'); // navigates to product Component
          }, 200);
        } else {
          console.log('Invalid email or password.');
        }
      } catch (error) {
        console.error('Register error', error);
        // setErrorMessage('An error occurred during login.');
      }
      
      };
    
    const handleNext = (data) => {
        setFormData({...formData, ...data});
        if(currentStep < 3) {
            setCurrentStep(currentStep+1);
        }
        else {
            submitDatatoEndpoint(data);
        }
    }

    const submitDatatoEndpoint = (additionalData) => {
        console.log(additionalData)
        const allData  = { ...formData, ...additionalData }
        console.log(allData);
        handleOpenAccount(allData);
    }
    const renderComponent = () => {
        switch(currentStep) {
            case  1:
                return <BasicInformation onNext={handleNext}/>;
            case 2:
                return <Address onNext={handleNext} />
            case 3:
                return <PermanentAddress onSubmit={handleNext} />
            default:
                return null
        }
    }
    return (  
        <div>
            {renderComponent()}
        </div>
    );
}

export default OpenAccount;