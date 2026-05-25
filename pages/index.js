import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Здесь можно добавить отправку email на сервер
      console.log('Email submitted:', email)
    }
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubmitted(true)
      console.log('Newsletter email submitted:', newsletterEmail)
    }
  }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">waqti.app</a>
        <nav className="nav">
          <a href="#about">О приложении</a>
          <a href="#features">Функции</a>
          <a href="#roadmap">Дорожная карта</a>
          <a href="#contact">Контакты</a>
          <a href="#support" className="nav-button">Поддержать</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Waqti.app</h1>
          <p className="hero-subtitle">
            Мобильное приложение для мусульман. Без рекламы. Только самое важное.
          </p>

          <div className="hero-cta">
            {!submitted ? (
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="email-input"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="cta-button">
                  Получить ранний доступ
                </button>
              </form>
            ) : (
              <div style={{ padding: '20px', color: '#2E7D32' }}>
                Спасибо! Мы уведомим вас, когда приложение будет готово.
              </div>
            )}
            <p className="hero-note">
              Уведомим вас, когда приложение будет готово
            </p>
          </div>
        </div>
      </main>

      {/* Motivation Section */}
      <section className="motivation">
        <div className="motivation-container">
          <p className="motivation-text">
            Мы знаем, как это бывает трудно — следить за временем, заводить новые привычки и выполнять свои цели. Мы хотим вам помочь.
          </p>
          {!newsletterSubmitted ? (
            <form className="email-form" onSubmit={handleNewsletterSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
              <input
                type="email"
                className="email-input"
                placeholder="Ваш email для рассылки"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-button">
                Подписаться на рассылку
              </button>
            </form>
          ) : (
            <div style={{ padding: '20px', color: '#2E7D32' }}>
              Вы подписались на рассылку!
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title">Что внутри Waqti.app</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📖 Чтение Корана</h3>
              <p>Полный текст Корана с удобной навигацией и возможностью закладок</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Ведение целей</h3>
              <p>Ставьте духовные и личные цели, отслеживайте прогресс и достигайте большего</p>
            </div>
            <div className="feature-card">
              <h3>✅ Привычки</h3>
              <p>Формируйте полезные привычки, например ежедневное чтение Корана или намаз</p>
            </div>
            <div className="feature-card">
              <h3>🧭 Поиск Каабы</h3>
              <p>Точное определение направления на Каабу (кибла) в любой точке мира</p>
            </div>
            <div className="feature-card">
              <h3>📚 Хадисы каждый день</h3>
              <p>Ежедневные хадисы для вдохновения и углубления знаний</p>
            </div>
            <div className="feature-card">
              <h3>⏰ Время намаза</h3>
              <p>Точное время намаза с напоминаниями и созывом (азан)</p>
            </div>
            <div className="feature-card">
              <h3>🤲 Дау</h3>
              <p>Большая коллекция дуа на любое событие и жизненную ситуацию</p>
            </div>
            <div className="feature-card no-ads">
              <h3>🚫 Нет рекламы</h3>
              <p>Полностью бесплатное приложение без рекламы — только чистый опыт</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap" id="roadmap">
        <div className="roadmap-container">
          <h2 className="section-title">Дорожная карта</h2>
          <div className="roadmap-list">
            <div className="roadmap-item status-ready">
              <h3>Создание прототипа</h3>
              <span className="status">Готово</span>
            </div>
            <div className="roadmap-item status-progress">
              <h3>Сбор вишлистов</h3>
              <span className="status">Идет</span>
            </div>
            <div className="roadmap-item status-upcoming">
              <h3>Запуск альфа-версии</h3>
              <span className="status">Через месяц</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Waqti.app — Все права защищены</p>
      </footer>
    </>
  )
}
