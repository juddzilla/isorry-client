import React, { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import CreateCollection from './components/Create/Collection';

import './App.css';

export const AuthContext = createContext(false);
export const ShowCreateContext = createContext(false);

function App() {
  const [auth, setAuth] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  return (
      <div className="App h-full flex flex-col">
        <AuthContext.Provider value={{ auth, setAuth }}>
          <ShowCreateContext.Provider value={{showCreate, setShowCreate}}>
            <Header />
            <Outlet />
            <Footer />
            <CreateCollection open={showCreate} setOpen={setShowCreate} />
          </ShowCreateContext.Provider>
        </AuthContext.Provider>
      </div>
  );
}

export default App;
