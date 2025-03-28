import React from 'react';
import News from '../News/News';
import Sach from '../Sach/Sach';
import Ugl from '../Ugl/Ugl';
import './Home.css'

const Home: React.FC = () => {
    return (
        <div>
<div className="sosalimage" style={{ marginTop: '150px', marginLeft: '20px', marginRight: '20px' }}>
    <img src={`${process.env.PUBLIC_URL}/image.png`} alt="image" className="home-image" />
</div>
            <News />
            <Sach />
            <Ugl />
<div className="sosalimage" style={{ marginTop: '150px', marginLeft: '20px', marginRight: '20px' }}>
    <img src={`${process.env.PUBLIC_URL}/image.png`} alt="image" className="home-image" />
</div>
        </div>
    );
};

export default Home;