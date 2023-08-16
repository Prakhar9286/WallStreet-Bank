import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Loan from './components/Loan';
import Personal from './components/Personal';
// import Layout from './Layout';
import Navbar from './routes/Navbar';

export default function AppLayout() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home />} />
            
            <Route path="Personal" element={<Personal/>} />
            <Route path="Loan" element={<Loan />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AppLayout />);