import React, { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

export const AuthContext = createContext(false);

function App() {
  const [auth, setAuth] = useState(null);
  console.log(111);
  return (
      <div className="App h-full flex flex-col">
        <AuthContext.Provider value={{ auth, setAuth }}>
          <Header />
          <Outlet />
          <Footer />
        </AuthContext.Provider>
      </div>
  );
}

export default App;
