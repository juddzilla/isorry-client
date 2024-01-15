import React, { createContext } from 'react';
import { Outlet } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

export const ApologyContext = createContext({ uuid: null, apology: null });

function App() {
  return (
      <div className="App h-full flex flex-col">
        <ApologyContext.Provider value={{ uuid: null, apology: null }}>
          <Header />
          <Outlet />
          <Footer />
        </ApologyContext.Provider>
      </div>
  );
}

export default App;
