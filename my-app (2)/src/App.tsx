// App.tsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import logo from './emco_logo_4.png'; // Импорт вашего логотипа
import Home from './Home/Home'; // Импортируйте компонент Home


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar
        logo={<img src={logo} className="App-logo" alt="Logo" />}/>
       <Home></Home>

    </div>
  );
};

export default App;