// src/Navbar.tsx
import React from 'react';
import './Navbar.css';

interface NavbarProps {
  logo: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {logo}
      </div>
    </nav>
  );
};

export default Navbar;