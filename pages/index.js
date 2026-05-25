import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Здесь можно добавить отправку email на сервер
      console.log('Email submitted:', email)
    }
  }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">waqti.app</a>
        <nav className="nav">
          <a href="#about">О приложении</a>
          <a href="#features">Функции</a>
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

      <footer className="footer">
        <p>© 2024 Waqti.app — Все права защищены</p>
      </footer>
    </>
  )
}
