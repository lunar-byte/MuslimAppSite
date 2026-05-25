# Простой лендинг

Минималистичный лендинг на Next.js, готовый к деплою на Vercel.

## Структура проекта

```
├── pages/
│   ├── _app.js          # Корневой компонент приложения
│   └── index.js         # Главная страница с hero-блоком
├── styles/
│   └── global.css       # Глобальные стили
├── package.json         # Зависимости проекта
├── next.config.js       # Конфигурация Next.js
└── vercel.json          # Конфигурация Vercel
```

## Запуск локально

```bash
npm install
npm run dev
```

Откройте http://localhost:3000 в браузере.

## Деплой на Vercel

1. Установите Vercel CLI: `npm i -g vercel`
2. Запустите: `vercel --prod`

Или подключите репозиторий к Vercel для автоматического деплоя.

## Технологии

- Next.js 14 (App Router не используется, Pages Router)
- React 18
- CSS Modules (в виде глобального CSS)
