import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';
import Analytic from './Analytic';
import Balance from './Balance';
import History from './History';
import RightSidebar from './RightSidebar.jsx';
import Sidebar from './Sidebar.jsx';

function Dashboard() {
    return (
        <Section className="layout">
            <div className="leftgrid">
                <Sidebar></Sidebar>
            </div>
            <div className='rightgrid'>
                <RightSidebar></RightSidebar>
            </div>
            <div className="maingrid">        
                    <Analytic />
                    <Balance />
                    <History />    
            </div>
        </Section>
    )
}

export default Dashboard
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
