import React from 'react';
import News from '../News/News';
import GridComponent from '../GridComponent/GridComponent'; // Импортируйте новый компонент
import './Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <div>
            <News 
                title="Форум молодых работников угольной промышленности"
                location="Сахалинская область, Углегорский район, г. Шахтерск"
                date="28-31 мая 2025 года"
                buttonText="Расписание"
                onButtonClick={() => console.log("Кнопка нажата!")}
            />
            <GridComponent /> {/* Используйте GridComponent для отображения Sach и Ugl */}
            </div>
        </div>
        
    );
};

export default Home;  