import React from 'react'
import styled from 'styled-components'
import AdminNotification from './AdminNotification'
import AdminActivity from './AdminActivity'
import AdminPayment from './AdminPayment'

function AdminRightSidebar() {
    return (
        <Section>
            <div className="grid">
            <AdminNotification />
            <AdminActivity />
            <AdminPayment />

            </div>
        </Section>
    )
}

export default AdminRightSidebar
const Section = styled.section`
    position: fixed;
    right: 0;
    top: 0;
    background-color: #ECECF6;
    height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    gap: 2rem;
    .grid{
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;