// App.tsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import ImageComponent from './ImageComponent/ImageComponent';
import logo from './logo.png'; // ������ ������ ��������
import Home from './Home/Home'; // ������������ ��������� Home


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