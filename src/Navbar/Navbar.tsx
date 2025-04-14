import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Navbit.css';
import SplitButton from '../SplitButton/SplitButton';

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
            setIsVisible(false); // Прокрутка вниз
        } else {
            setIsVisible(true); // Прокрутка вверх
        }

        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
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
                <Link to="/">{logo}</Link>
            </div>
            <div className="navbar-links">
                <div className={`links-container ${isMobileMenuOpen ? 'open' : ''}`}>
                    <SplitButton 
                        label="Меню" 
                        options={[
                            { label: 'Фото', path: '/photos' },
                            { label: 'Материалы', path: '/materials' },
                            { label: 'Новости', path: '/news' },
                            { label: 'Объявления', path: '/announcements' },
                            { label: 'Обратная связь', path: '/feedback' },
                        ]}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;