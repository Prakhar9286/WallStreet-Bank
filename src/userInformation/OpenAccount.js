import React, { useState } from 'react';
import { BasicInformation } from './BasicInformation';
import { Address } from './Address';
import {PermanentAddress} from './PermanentAddress';
import AuthenticationService from '../services/AuthenticationService';
function OpenAccount() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const handleOpenAccount = async (data) => {
    
    try {
        const openAccountSuccess = await AuthenticationService.openAccount(data);
        console.log('API response:', openAccountSuccess.data); // Add this line
        if (openAccountSuccess) {
            console.log("Account opening successful!")
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