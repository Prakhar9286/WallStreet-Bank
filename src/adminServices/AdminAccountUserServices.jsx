import React from 'react';
import styled from 'styled-components';
import "../styles/AdminSearchBox.css";

import AdminSidebar from './AdminSidebar.jsx';
import AdminRightSidebar from './AdminRightSidebar';

export const AdminAccountUserServices = () => {
    return (
    <Section className="layout">
        <div className="leftgrid">
            <AdminSidebar/>
        </div>
        <div className='rightgrid'>
            <AdminRightSidebar />
        </div>

        <div className="search-container">
            <form action="/">
            <input className="inputCol" type="text" placeholder="Search.." name="search" />
            <button className='submitBtn' type="submit">Submit</button>
            </form>
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