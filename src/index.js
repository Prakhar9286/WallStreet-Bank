import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './dashboard/dashboard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NewCustomer } from './new-customer/new-customer';
import { Deposit } from './deposit/deposit';
import { Withdraw } from './withdraw/withdraw';
import { Balance } from './balance/balance';
import { Transfer } from './transfer/transfer';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Dashboard/>} />
    <Route path = "/new" element = {<NewCustomer/>} />
    <Route path = "/deposit" element = {<Deposit/>} />
    <Route path = "/withdraw" element = {<Withdraw/>} />
    <Route path = "/balance" element = {<Balance/>} />
    <Route path = "/transfer" element = {<Transfer/>} />
  </Routes>
  </BrowserRouter>
);

