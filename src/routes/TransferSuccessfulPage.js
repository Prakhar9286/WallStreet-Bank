import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TransferSuccessfulPage = () => {
    const {id} = useParams();
    const history = useNavigate();
    const onClick = () => {
        history("/"+id+"/dashboard")
    }
    const location = useLocation();
    const transaction = location.state?.transactionMsg;
    console.log(location.state);
    return (
        <div className="transfersucccessfulcontainer">
            <h1>Transfer Succesfull</h1>
            {/* <center> */}
            <div style={{marginLeft:"550px",marginTop:"50px"}}>
            <h3>Reference ID : {transaction.transactionId}</h3>
                <h3>Mode         : {transaction.transactionTypeId}</h3>
                <h3>To Account   : {transaction.toAc}</h3>
                <h3>From Account : {transaction.fromAc}</h3>
                <h3>Amount       : Rs {transaction.amount}</h3>
                <h3>Date         : {transaction.date}</h3>
                <h3>Remarks      : {transaction.remarks}</h3>
                
                </div>
                
                <center>
                <button type="button" style={{fontSize:"25px"}} onClick={onClick}>Go to Dashboard</button>
                </center>
            {/* </center> */}
            {/* <table className="transferdetailstable">
                <thead>
                    <tr>
                        <th>
                            Reference ID
                        </th>
                        <th>
                            Mode
                        </th>

                        <th>
                            To Account
                        </th>
                        <th>
                            From Account
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Remarks
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}

export default TransferSuccessfulPage;