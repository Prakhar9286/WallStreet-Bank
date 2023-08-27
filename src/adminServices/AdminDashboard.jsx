import React from 'react';
import styled from 'styled-components';
// import AdminAnalytic from './AdminAnalytic';
// import AdminBalance from './AdminBalance';
// import AdminHistory from './AdminHistory';
import AdminSidebar from './AdminSidebar.jsx';
import AdminRightSidebar from './AdminRightSidebar';
import { AdminAccountUserServices } from './AdminAccountUserServices';
import Navbar from '../components/Navbar.jsx';

function AdminDashboard() {
    return (
    <Section className="layout">
        <Navbar />

        <div className="search-box">
            <AdminAccountUserServices />
        </div>

        <div className="leftgrid">
            <AdminSidebar/>
        </div>
        <div className='rightgrid'>
            <AdminRightSidebar />
        </div>
        {/* <div className="maingrid">        
                <AdminHistory />    
        </div> */}

        {/* <div className="search-box">
            <AdminAccountUserServices />
        </div> */}
    </Section>
    )
}

export default AdminDashboard
const Section = styled.section `
margin-left: 5vw;
margin-right: 14px;
padding: 2rem;
height: 30rem;
background-color: #F5F5FD;
.layout{
    display: flex;
    overflow: auto;
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