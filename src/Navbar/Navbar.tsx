// src/Navbar.tsx
import React from 'react';
import './Navbar.css';
import Button from '../Button/Button';

interface NavbarProps {
  logo: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
       <div className="navbar-logo">
        {logo}
      </div>
        <Button text="Фото" onClick={() => console.log("Главная")} />
        <Button text="Материалы" onClick={() => console.log("О нас")} />
        <Button text="Обратная связь" onClick={() => console.log("Услуги")} />
        <Button text="Новости" onClick={() => console.log("Контакты")} />
      </div>
    </nav>
  );
};

export default Navbar;

