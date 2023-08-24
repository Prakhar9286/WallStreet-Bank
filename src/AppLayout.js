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
import OpenAccount from './userInformation/OpenAccount';
import { AdminSystem } from './adminServices/AdminSystem';
import { AdminAccountUserServices } from './adminServices/AdminAccountUserServices';

export default function AppLayout() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home />} />
            
            <Route path="personal" element={<Personal/>} />
            <Route path="Contact" element={<Contact />} />
            <Route path="about" element={<About/>} />
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            {/* <Route path="basicinformation" element={<BasicInformation/>} /> */}
            <Route path="netbanking" element={<NetBanking/>} />
            <Route path="openAccount" element={<OpenAccount/>} />
            <Route path="adminSystem" element={<AdminSystem/>}></Route>
            <Route path="adminuserservices" element={<AdminAccountUserServices/>}></Route>
            {/* <Route path="address" element={<Address/>} /> */}
            {/* <Route path="permanentaddress" element={<PermanentAddress/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AppLayout />);