import React from 'react';
import { useParams } from 'react-router-dom';

const NewsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Получаем параметр id из URL

    // Пример статических данных
    const newsData = [
        { id: '1', title: 'Новость 1', content: 'здесь ничего нету' },
    ];

    // Находим новость по id
    const newsItem = newsData.find(news => news.id === id);

    return (
        <div>
            {newsItem ? (
                <>
                    <h1>{newsItem.title}</h1>
                    <p>{newsItem.content}</p>
                </>
            ) : (
                <h1>Здесь ничего нет</h1> // Сообщение, если новость не найдена
            )}
        </div>
    );
};

export default NewsPage;