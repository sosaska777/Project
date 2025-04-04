import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ImageComponent from './ImageComponent/ImageComponent';
import logo from './logos.png'; // Импорт логотипа
import Home from './Home/Home'; // Импорт компонента Home
import SachPage from './NewsPage/SachPage'; // Импорт страницы новостей
import UglPage from './UglPage/UglPage';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar
          logo={<ImageComponent src={logo} alt="Logo" />} // Используем ImageComponent для логотипа
        />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Главная страница */}
          <Route path="/sach" element={<SachPage />} /> {/* Страница Sach */}
          <Route path="/ugl" element={<UglPage />} /> {/* Страница новостей */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;