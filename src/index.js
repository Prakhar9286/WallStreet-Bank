import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import ContactUs from './routes/ContactUs';
import Personal from './routes/Personal';

export default function navElements(){
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Personal" element={<Personal />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="About" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
