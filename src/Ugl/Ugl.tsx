import React from 'react';
import HomeSection from '../HomeSection/HomeSection';

const Ugl: React.FC = () => {
    // Путь к изображению в папке public
    const uglegorskImage = `${process.env.PUBLIC_URL}/qwer.png`;

    return (
        <HomeSection
            images={[uglegorskImage]} // Оборачиваем в массив, если «images» - это массив
            altText="View of Uglegorsk District, Sakhalin Island"
            title="Углегорский район"
            description="Район расположен в западной части о. Сахалин, включая погасшие вулканы Ичара и Краснова. Крупнейшие реки района — Углегорка (длина 102 км, площадь бассейна 1250 км²) и Лесогорка (длина 72 км, площадь бассейна 1020 км²). Углегорский район граничит со Смирныховским городским округом на севере и северо-востоке, Поронайским и Макаровским городскими округами на востоке и Томаринским городским округом на юге."
            style={{ marginBottom: '250px' }}
        />
    );
};

export default Ugl;