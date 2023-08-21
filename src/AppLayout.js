import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Personal from './routes/Personal';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import { Register } from './routes/Register';
import Imps from './routes/Imps';
import Neft from './routes/Neft';
import Rtgs from './routes/Rtgs';

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
            <Route path="imps" element={<Imps/>}/>
            <Route path="neft" element={<Neft/>}/>
            <Route path="rtgs" element={<Rtgs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AppLayout />);