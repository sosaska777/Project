import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import './Navbar.css';
import './Navbit.css'; // Импортируем стили для кнопок

interface NavbarProps {
    logo: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Прокрутка вниз - скрыть навбар
            setIsVisible(false);
        } else {
            // Прокрутка вверх - показать навбар
            setIsVisible(true);
        }

        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Для мобильных устройств или при прокрутке вверх
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="navbar-logo">
                <Link to="/"> {/* Оборачиваем логотип в Link */}
                    {logo}
                </Link>
            </div>
            <div className="navbar-links">
                {/* Кнопка для открытия/закрытия мобильного меню */}
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    ☰
                </button>
                <div className={`links-container ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/photos">Фото</Link>
                    <Link to="/materials">Материалы</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/announcements">Объявления</Link>
                    <Link to="/feedback">Обратная связь</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;