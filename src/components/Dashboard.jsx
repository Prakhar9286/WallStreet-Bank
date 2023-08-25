import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Analytic from './Analytic'
import Balance from './Balance'
import History from './History'
import { useParams } from 'react-router-dom'
import RightSidebar from './RightSidebar'
const Dashboard = (p) => {
    const {customerId} = useParams();
    return (
        <Section>
           
            <div className="grid">        
                    {/* <Navbar /> */}
                    <Analytic />
                    {/* <RightSidebar/> */}
                    <Balance />
                    <History customerId={customerId}/>    
            </div>
        </Section>
    )
}

export default Dashboard;
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
