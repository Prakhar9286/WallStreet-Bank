import React from 'react';

export default function TransferSuccessfulPage(){
    return (
        <div className={styles.transfersucccessfulcontainer}>
            <h2>Transfer Succesfull</h2>
            <tablke className={styles.transferdetailstable}>
                <thead>
                    <tr>
                        <th>
                            Refernce ID
                        </th>
                        <th>
                            Mode
                        </th>

                        <th>
                            Paid to amount
                        </th>
                        <th>
                            From Account
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
                        <td>123456</td>
                        <td>Online</td>
                        <td>76776767</td>
                        <td>500 rs</td>
                        <td>67676767</td>
                        <td>25-08-2023</td>
                        <td>Payment for utiulities</td>
                    </tr>
                </tbody>
            </tablke>
        </div>
    );
}