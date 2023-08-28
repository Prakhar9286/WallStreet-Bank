import React from 'react';
import { useTable } from 'react-table';
import AuthenticationService from '../services/AuthenticationService';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import styled from 'styled-components';

const AdminTransactionService = () => {
    
    const [transaction,setTransaction] = useState([]);
    const [customerId,setCustomerId] = useState("");
    let isClicked = false;
    const handleChange = (e) => {
       setCustomerId(e.target.value);
    }
    const fetchData = async () => {
        try {
            const response = await AuthenticationService.getAllTransactions(customerId);
            console.log(response);
            return response;
        }
        catch{
            console.log("Something went wrong !");
        }
    }
    const handleSearch = () => {
        console.log(customerId);
        if(customerId) {
            fetchData().then((response) => {
                setTransaction(response);
            })
        }
        isClicked = true;
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
            <center>
        <div class="search-container">
            <h2> Transaction Monitoring</h2>
            <form>
            <input className="inputCol" type="number" placeholder="Customer ID" name="search" onChange={handleChange}/>
            <button className='submitBtn' type="button" onClick={handleSearch}>Submit</button>
            </form>
            
            
        </div>
        </center>
        <br/>
            <br/>
            <div className="row justify-content-center" >
                    <table className="table table-success w-auto">
                     <thead>
                        <tr className="table-danger">
                            <th> Transaction ID</th>
                            <th> From Account</th>
                            <th>To Account</th>
                            <th>Date</th>
                            <th> Amount</th>
                            <th> Mode</th>
                            <th> Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                            {transaction && transaction.map(
                                    t => 
                                    <tr>
                                        <td> {t.transactionId} </td>
                                        <td> {t.fromAc} </td>
                                        <td> {t.toAc} </td>
                                        <td> {t.date} </td>
                                        <td> {t.amount} </td>
                                        <td> {t.transactionTypeId} </td>
                                        <td> {t.remarks} </td>
                                    </tr>
                                ) 
                            }
                    </tbody>
                    </table>
                </div>
            </div>
    {/* </div> */}
    </Section>
    )
}

export default AdminTransactionService;
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