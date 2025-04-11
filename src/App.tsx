import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ImageComponent from './ImageComponent/ImageComponent';
import logo from './logos.png'; // Импорт логотипа
import Home from './Home/Home'; // Импорт компонента Home
import PhotosPage from './PhotosPage/PhotosPage'; // Импорт страницы Фото
import MaterialsPage from './MaterialsPage/MaterialsPage'; // Импорт страницы Материалы
import SachPage from './SachPage/SachPage'; // Импорт страницы новостей
import UglPage from './UglPage/UglPage'; // Импорт страницы Ugl
import AnnouncementsPage from './AnnouncementsPage/AnnouncementsPage'; // Импорт страницы Объявления
import FeedbackPage from './FeedbackPage/FeedbackPage'; // Импорт страницы Обратная связь
import NewsPage from './NewsPage/NewsPage'; // Импорт страницы новостей
import SponsorImage from './SponsorImage/SponsorImage';
import './App.css'; // Импортируй файл стилей

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar
          logo={<ImageComponent src={logo} alt="Logo" />} // Используем ImageComponent для логотипа
        />
        <SponsorImage />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Главная страница */}
          <Route path="/photos" element={<PhotosPage />} /> {/* Страница Фото */}
          <Route path="/materials" element={<MaterialsPage />} /> {/* Страница Материалы */}
          <Route path="/sach" element={<SachPage />} /> {/* Страница Sach */}
          <Route path="/ugl" element={<UglPage />} /> {/* Страница новостей */}
          <Route path="/announcements" element={<AnnouncementsPage />} /> {/* Страница Объявления */}
          <Route path="/feedback" element={<FeedbackPage />} /> {/* Страница Обратная связь */}
          <Route path="/news" element={<NewsPage />} /> {/* Страница новостей */}
        </Routes>
        <SponsorImage />
      </div>
    </Router>
  );
};

export default App;