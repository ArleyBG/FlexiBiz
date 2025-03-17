import React from 'react';
import './header.css';
import Carrito from '../carrito/carrito';

const Header = () => {
  return (
    <div className="header">
      <header className="App-header">
        <h1>Burger Grill</h1>
        <Carrito />
      </header>
    </div>
  );
};

export default Header;
