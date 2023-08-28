import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Personal from './routes/Personal';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import { Register } from './routes/Register';

import { Login } from './routes/Login';
// import { BasicInformation }from './userInformation/BasicInformation';
import NetBanking from './routes/NetBanking';
// import { Address } from './userInformation/Address';
// import { PermanentAddress } from './userInformation/PermanentAddress';
import Dashboard from './components/Dashboard';
import OpenAccount from './userInformation/OpenAccount';
import Neft from './routes/Neft';
import DashboardWrapper from './components/DashboardWrapper';
import Rtgs from './routes/Rtgs';
import Imps from './routes/Imps';
import AdminDashboard from './adminServices/AdminDashboard';
import AdminNavBar from './components/Navbar.jsx';
import { AdminUserWithdrawal } from './adminServices/AdminUserWithdrawal';

export default function AppLayout(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home />} />
            
            <Route path="personal" element={<Personal/>} />
            <Route path="Contact" element={<Contact />} />
            <Route path="about" element={<About/>} />
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            {/* <Route path="basicinformation" element={<BasicInformation/>} /> */}
            <Route path="netbanking" element={<NetBanking/>} />
            <Route path="/:customerId/openAccount" element={<OpenAccount/>} />
            {/* <Route exact path="/:customerId/dashboard" element={<Dashboard/>} /> */}
            
            {/* <Route path="address" element={<Address/>} /> */}
            {/* <Route path="permanentaddress" element={<PermanentAddress/>} /> */}
          </Route>
          <Route path="/:customerId/dashboard" element={<AdminNavBar />} />
            <Route exact path="/:customerId/dashboard" element={<DashboardWrapper/>} />
            <Route path="neft" element={<Neft/>} />
            <Route path="rtgs" element={<Rtgs/>} />
            <Route path="imps" element={<Imps/>} />
            <Route path="admindashboard" element={<AdminDashboard/>} />
            <Route path="adminuserwithdrawal" element={<AdminUserWithdrawal/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AppLayout />);