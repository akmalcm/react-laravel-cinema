import React, { useState } from 'react';
import {BrowserRouter, Routes, Route}  from "react-router-dom"; 

import './App.css';
import Purchase from './components/PurchaseForm/PurchaseForm';
import PurchaseList from './components/PurchaseList/PurchaseList';
import Home from './components/Home/Home';

function App() {

  /* const changePage = (page) => {
    setHomeView(false);
    setPurchaseView(false);
    setListPurchaseView(false);
    setEditView(false);
    setLoginView(false);

    switch (page) {
      case 'home':
        setHomeView(true);
        break;
      case 'purchase':
        setPurchaseView(true);
        break;
      case 'purchaseList':
        setListPurchaseView(true);
        break;
      case 'edit':
        setEditView(true);
        break;
      case 'login':
        setLoginView(true);
        break;
    }
  } */


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="purchases" element={<PurchaseList />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="purchaseDetail" element={<Purchase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
