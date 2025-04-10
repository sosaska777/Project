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
      <div className="navbar-links">
        <Link to="/photos">Фото</Link>
        <Link to="/materials">Материалы</Link>
        <Link to="/news">Новости</Link>
        <Link to="/announcements">Объявления</Link>
        <Link to="/feedback">Обратная связь</Link>
      </div>
    </nav>
  );
};

export default Navbar;