import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import RightSidebar from './RightSidebar';
import styled from 'styled-components'
function DashboardWrapper() {
    return (
        <Div>
            <Sidebar />
            <Dashboard />
            <RightSidebar />

        </Div>
     )
}

export default DashboardWrapper;
const Div = styled.div `
position: relative;
`;