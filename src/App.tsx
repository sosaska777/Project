// App.tsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import ImageComponent from './ImageComponent/ImageComponent';
import logo from './image.png'; // Логотип

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar
        logo={<ImageComponent src={logo} alt="Logo" />} // Используем ImageComponent для логотипа
      />
      <Home />
    </div>
  );
};

export default App;