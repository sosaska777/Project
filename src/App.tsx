// App.tsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import logo from './logo.png'; // ������ ������ ��������
import Home from './Home/Home'; // ������������ ��������� Home


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