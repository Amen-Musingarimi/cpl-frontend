import React from 'react';
import { useDispatch } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar/SideBar';
import Authentication from './components/auth/Authentication';
import { toggleNav } from './redux/sideBarSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <FiMenu className="menu-icon" onClick={() => dispatch(toggleNav())} />

      <SideBar />
      <Routes>
        <Route exact path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
};

export default App;
