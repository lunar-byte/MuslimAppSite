# Sabr PWA — настройка на Vite + Vercel (iOS)

## Стек
- React + Vite
- `vite-plugin-pwa` (обёртка над Workbox)
- Деплой: Vercel

---

## 1. Установка зависимостей

```bash
npm install -D vite-plugin-pwa
```

---

## 2. Структура файлов

```
/public
  manifest.json
  icon-192.png
  icon-512.png
  icon-apple-180.png   ← обязательно для iOS
  splash-2048.png      ← splash screen для iPad Pro (опционально)
/src
  main.jsx
  App.jsx
  pages/
    SabrIntro.jsx
    Step1.jsx
    Step2.jsx
    Step3.jsx
    Step4.jsx
    Step5.jsx
    Step6.jsx
    SabrComplete.jsx
vite.config.js
```

---

## 3. vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-apple-180.png', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Sabr',
        short_name: 'Sabr',
        description: 'Навигация эмоций с намерением',
        theme_color: '#13061f',
        background_color: '#13061f',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          }
        ]
      }
    })
  ]
})
```

---

## 4. public/manifest.json

Плагин генерирует его автоматически из `vite.config.js`. Отдельный файл не нужен — не дублируй.

---

## 5. iOS-специфичные теги — index.html

Вставить в `<head>` файла `index.html`:

```html
<!-- iOS PWA -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Sabr">

<!-- Иконка для iOS (обязательно) -->
<link rel="apple-touch-icon" href="/icon-apple-180.png">

<!-- Цвет строки статуса -->
<meta name="theme-color" content="#13061f">

<!-- Viewport — обязательно для fullscreen -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

> **Важно:** Safari на iOS не читает manifest.json для иконок и splash-экранов.  
> Все iOS-параметры задаются только через `<meta>` и `<link>` теги в `index.html`.

---

## 6. Splash screens для iOS (опционально, но рекомендуется)

Safari показывает белый экран при запуске, если splash не задан. Добавь в `<head>`:

```html
<!-- iPhone 14 Pro Max -->
<link rel="apple-touch-startup-image"
  href="/splash-1290x2796.png"
  media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)">

<!-- iPhone 14 / 13 -->
<link rel="apple-touch-startup-image"
  href="/splash-1170x2532.png"
  media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)">

<!-- iPhone SE -->
<link rel="apple-touch-startup-image"
  href="/splash-750x1334.png"
  media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)">
```

Для генерации всех размеров используй: [progressier.com/apple-touch-startup-image-generator](https://progressier.com/apple-touch-startup-image-generator)

---

## 7. Страницы приложения Sabr

### Роутинг

```jsx
// src/main.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

<BrowserRouter>
  <Routes>
    <Route path="/"          element={<SabrIntro />} />
    <Route path="/step/1"    element={<Step1 />} />
    <Route path="/step/2"    element={<Step2 />} />
    <Route path="/step/3"    element={<Step3 />} />
    <Route path="/step/4"    element={<Step4 />} />
    <Route path="/step/5"    element={<Step5 />} />
    <Route path="/step/6"    element={<Step6 />} />
    <Route path="/complete"  element={<SabrComplete />} />
  </Routes>
</BrowserRouter>
```

### Описание страниц

| Маршрут | Компонент | Содержимое |
|---|---|---|
| `/` | `SabrIntro` | Приветствие, кнопка «Начать практику» |
| `/step/1` | `Step1` | Триггер, выбор эмоций, слайдер интенсивности |
| `/step/2` | `Step2` | Негативные мысли, оценка истинности (да/нет/может быть) |
| `/step/3` | `Step3` | Альтернативные объяснения (чекбоксы), 5 перспектив благодарности, мухасаба |
| `/step/4` | `Step4` | Выбор Имени Аллаха, поле «в честь этого Имени я...» |
| `/step/5` | `Step5` | Здоровая мысль, выбор намерения (ниет), один конкретный шаг |
| `/step/6` | `Step6` | Повторная оценка эмоций (было → стало), заметка, завершение |
| `/complete` | `SabrComplete` | Итог сессии, сохранение, кнопка «Новая практика» |

### Навигация между шагами

```jsx
// В каждом Step-компоненте
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

// Кнопка "Далее"
<button onClick={() => navigate('/step/2')}>Далее</button>

// Кнопка "Назад"
<button onClick={() => navigate(-1)}>Назад</button>
```

---

## 8. Хранение данных сессии

Данные одной сессии Sabr хранятся в `sessionStorage` (очищаются при закрытии) или `localStorage` (постоянно).

```js
// Сохранить
localStorage.setItem('sabr_session', JSON.stringify(sessionData))

// Прочитать
const session = JSON.parse(localStorage.getItem('sabr_session') || '{}')
```

Структура объекта сессии:

```js
{
  createdAt: '2024-01-15T22:00:00Z',
  step1: {
    trigger: 'На работе произошло...',
    emotions: [{ name: 'Подавлен', intensity: 7 }, { name: 'Злость', intensity: 5 }]
  },
  step2: {
    negativeThoughts: '...',
    whoBecome: '...',
    thoughtsTruth: 'maybe'
  },
  step3: {
    alternatives: ['this_may_not_be_as_bad', 'allah_protecting'],
    gratitude: ['...', '...', '...']
  },
  step4: {
    allahName: 'As-Sabur',
    intention: '...'
  },
  step5: {
    healthyThought: '...',
    niyyah: 'respectful_conversation',
    oneStep: '...'
  },
  step6: {
    rerating: [{ name: 'Подавлен', before: 7, after: 3 }],
    finalNote: '...'
  }
}
```

---

## 9. Деплой на Vercel

### vercel.json — обязательно для SPA

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Без этого файла Vercel вернёт 404 при прямом переходе на `/step/3`.

### Команды деплоя

```bash
npm run build       # собрать в /dist
vercel --prod       # задеплоить
```

Vercel автоматически определит Vite и использует `dist` как папку вывода.

---

## 10. Чеклист перед деплоем

- [ ] `index.html` содержит все iOS `<meta>` теги
- [ ] `icon-apple-180.png` лежит в `/public`
- [ ] `vite.config.js` содержит `VitePWA` с корректным манифестом
- [ ] `vercel.json` с rewrite правилом создан
- [ ] Сайт открывается по HTTPS (Vercel даёт автоматически)
- [ ] В Safari: Поделиться → На экран Домой → иконка и название корректны
- [ ] При запуске с главного экрана — открывается без адресной строки Safari

---

## 11. Проверка PWA

```bash
npm install -g lighthouse
lighthouse https://твой-домен.vercel.app --view
```

Целевые показатели раздела PWA в Lighthouse: все пункты зелёные.
