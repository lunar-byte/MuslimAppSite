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

          {/* Пример изображения с lazy loading */}
          {/*
          <div style={{ marginTop: '60px' }}>
            <Image
              src="/hero-phone.png"  // Положите файл в папку public/
              alt="Waqti.app приложение на телефоне"
              width={300}
              height={600}
              priority  // Удалите priority для изображений ниже скролла (они будут lazy)
              style={{ objectFit: 'contain' }}
            />
          </div>
          */}
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Waqti.app — Все права защищены</p>
      </footer>
    </>
  )
}
