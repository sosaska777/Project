// src/FeedbackPage/FeedbackPage.tsx
import React, { useState } from 'react';
import './FeedbackPage.css'; // Импортируем файл стилей

const FeedbackPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику для обработки отправки отзыва
    console.log('Отзыв отправлен:', { name, email, message });
    // Очистка формы после отправки
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="feedback-page">
      <h1 className="feedback-title">Оставьте свой отзыв</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Отправить</button>
      </form>
    </div>
  );
};

export default FeedbackPage;