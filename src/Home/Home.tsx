import React from 'react';
import News from '../News/News';
import GridComponent from '../GridComponent/GridComponent'; // Импортируйте новый компонент
import './Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <div className="sosalimage" style={{ marginTop: '150px', marginLeft: '20px', marginRight: '20px' }}>
                <img src={`${process.env.PUBLIC_URL}/image.png`} alt="image" className="home-image" />
            </div>
            
            <News />
            <GridComponent /> {/* Используйте GridComponent для отображения Sach и Ugl */}
            <div className="sosalimage" style={{ marginTop: '150px', marginLeft: '20px', marginRight: '20px' }}>
                <img src={`${process.env.PUBLIC_URL}/image.png`} alt="image" className="home-image" />
            </div>
        </div>
    );
};

export default Home;