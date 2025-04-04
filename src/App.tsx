import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ImageComponent from './ImageComponent/ImageComponent';
import logo from './logos.png'; // Импорт логотипа
import Home from './Home/Home'; // Импорт компонента Home
import Sach from './Sach/Sach'; // Импорт компонента Sach
import NewsPage from './NewsPage/NewsPage'; // Импорт страницы новостей
import './App.css'; // Импортируй файл стилей


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar
          logo={<ImageComponent src={logo} alt="Logo" />} // Используем ImageComponent для логотипа
        />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Главная страница */}
          <Route path="/sach" element={<Sach />} /> {/* Страница Sach */}
          <Route path="/news/:id" element={<NewsPage />} /> {/* Страница новостей */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;