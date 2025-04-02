// src/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import './Navbar.css';

interface NavbarProps {
  logo: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> {/* Оборачиваем логотип в Link */}
          {logo}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;