import React, { useState } from 'react';
import styled from 'styled-components';
import "../styles/AdminSearchBox.css";

import AdminSidebar from './AdminSidebar.jsx';
import AdminRightSidebar from './AdminRightSidebar';
import AuthenticationService from '../services/AuthenticationService';

export const AdminAccountUserServices = () => {

    const [customer,setCustomer] = useState([]);
    const [fname, setFname] = useState("");
    const handleChange = (e) => {
        setFname(e.target.value);
    }
    const fetchData = async () => {
        try {
            const response = await AuthenticationService.getUsersAdmin(fname);
            console.log(response);
            return response;
        }
        catch{
            console.log("Something went wrong !");
        }
    }
    const handleSearch = () => {
        console.log(fname);
        if(fname) {
            fetchData().then((response) => {
                setCustomer(response);
            })
        }
    }
    return (
    <Section className="layout">
        <div className="leftgrid">
            <AdminSidebar/>
        </div>
        {/* <div className='rightgrid'>
            <AdminRightSidebar />
        </div> */}
        <div>
        <div class="search-container">
            <h2> User Information</h2>
            <form>
            <input className="inputCol" type="text" placeholder="Search.." name="search" onChange={handleChange}/>
            <button className='submitBtn' type="button" onClick={handleSearch}>Submit</button>
            </form>
            
            
        </div>
        <br/>
            <br/>
        <div className="row justify-content-center" >
                    <table className="table table-success w-auto">
                     <thead>
                        <tr className="table-danger">
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Account No</th>
                            <th>Date of Birth</th>
                            <th> Mobile</th>
                            <th> Email</th>
                            <th> Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                            {customer.map(
                                    cust => 
                                    <tr>
                                        <td> {cust.fname} </td>
                                        <td> {cust.lname} </td>
                                        <td> {cust.account.accountNo} </td>
                                        <td> {cust.dob} </td>
                                        <td> {cust.mobile} </td>
                                        <td> {cust.email} </td>
                                        <td> {cust.account.balance} </td>
                                    </tr>
                                )
                            }
                    </tbody>
                    </table>
                </div>
            </div>
    </Section>
    )
}

const Section = styled.section `
margin-left: 5vw;
margin-right: 14px;
padding: 2rem;
height: 60rem;
background-color: #F5F5FD;
.layout{
    display: flex;
}

.leftgrid{
    width: 20%;
}

.rightgrid{
    width: 25%;
}

.maingrid{ 
    margin-top: 0.5rem;
    z-index: 2;
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
}

`;