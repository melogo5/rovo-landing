# Rovo Landing — План реализации

## Стек
- **Framework**: Next.js 15 (App Router), React 19, TypeScript (strict)
- **Стили**: Tailwind CSS 4
- **Шрифт**: Manrope (Google Fonts)
- **Анимации**: Framer Motion
- **i18n**: next-intl
- **Деплой**: Vercel (автодеплой из main)
- **Форма**: собственная форма → API route → Telegram Bot (бот в отдельной репе)

---

## Этап 1 — Инициализация проекта

- [ ] `npx create-next-app@latest rovo-landing` (TypeScript, Tailwind, App Router, ESLint)
- [ ] Установить зависимости: `framer-motion`, `next-intl`, `clsx`
- [ ] Настроить `tsconfig.json`: `strict: true`, path alias `@/*`
- [ ] Настроить Tailwind: подключить Manrope через Google Fonts, задать CSS-переменные цветов
- [ ] Базовый `globals.css`: CSS-переменные, reset, типографика
- [ ] Настроить ESLint + Prettier
- [ ] `.env.example` с переменными: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- [ ] Первый коммит и push в `main`

---

## Этап 2 — Деплой (Vercel)

- [ ] Подключить репо `melogo5/rovo-landing` к Vercel
- [ ] Настроить env переменные в Vercel Dashboard: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- [ ] Проверить автодеплой при пуше в `main`
- [ ] Настроить Preview Deployments для PR/веток

---

## Этап 3 — Дизайн-система

### CSS-переменные (globals.css)
```css
--green: #1D9E75
--green-dark: #0F6E56
--green-soft: #E1F5EE
--green-mid: #5DCAA5
--bg: #FBFBF9
--ink: #15151A
--ink-2: #2C2C2A
--ink-3: #5F5E5A
--ink-4: #888780
--warm-soft: #FAEEDA
--warm-mid: #EFB668
--warm-ink: #854F0B
--sand: #F5F1E8
--border: #ECEAE3
--radius: 18px
--radius-lg: 28px
```

### Базовые компоненты (`src/components/ui/`)
- [ ] `Button` — варианты: `primary`, `ghost`, `white` (для CTA на зелёном фоне)
- [ ] `Kicker` — маленький тег-лейбл (зелёный / warm / muted)
- [ ] `PhoneMockup` — обёртка для мокапа телефона (экран с skill tree и экран урока)
- [ ] `SectionShell` — центрирующий контейнер `max-w-[1240px]` с горизонтальными padding

---

## Этап 4 — i18n (RU / EN)

- [ ] Настроить `next-intl`: middleware, `i18n.ts`, routing
- [ ] Создать файлы переводов:
  - `messages/ru.json`
  - `messages/en.json`
- [ ] Вынести все тексты из дизайна в JSON-файлы (nav, hero, problem, how, diff, programs, cta, footer)
- [ ] Компонент `LanguageToggle` в navbar — переключает локаль, сохраняет в cookie
- [ ] Роутинг: `/` → русский, `/en` → английский (или через cookie без смены URL — на выбор)

---

## Этап 5 — Верстка секций

### 5.1 Nav
- [ ] Sticky navbar с blur-backdrop
- [ ] Логотип (SVG inline) + название «Rovo»
- [ ] `LanguageToggle` (RU / EN)
- [ ] CTA-кнопка «Хочу попробовать» (скрыта на мобиле < 720px)

### 5.2 Hero
- [ ] Двухколоночный grid (текст + телефон), на мобиле — одна колонка
- [ ] Заголовок H1 с акцентными span (зелёный) и strike-span (жёлтое подчёркивание)
- [ ] Подзаголовок, две кнопки (primary + ghost)
- [ ] Мета-строка: пульсирующая точка «Открытая бета», «10 минут в день», «iOS · Android»
- [ ] Мокап телефона: skill tree (дерево навыков с узлами done/active/locked)
- [ ] Плавающие карточки (стрик 🔥 и +30 XP 🏆) с анимацией float (Framer Motion)
- [ ] Фоновый radial gradient

### 5.3 Problem
- [ ] Песочный градиентный фон секции
- [ ] Два сценария-карточки: «Новичок» и «Любитель в клубе»
- [ ] Иконка-декор в углу карточки
- [ ] Цитата + подсказка внизу (с иконкой лампочки)

### 5.4 How it works
- [ ] 3 карточки-шага в grid (на мобиле — колонка)
- [ ] Большой номер шага как фоновый декор
- [ ] Иконка в зелёном квадрате с тенью
- [ ] Заголовок + описание

### 5.5 Differentiation
- [ ] Тёмный блок (`bg: #15151A`) с скруглёнными углами и боковыми отступами
- [ ] Двухколоночный grid: текст слева, телефон справа
- [ ] Список: 3 пункта ✓ (зелёные) + 2 пункта ✗ (перечёркнутые)
- [ ] Второй мокап телефона: экран урока (видео-плашка, описание, задание, кнопка «Выполнено»)
- [ ] Декоративный radial gradient в углу

### 5.6 Programs
- [ ] 4 карточки в grid (4 col → 2 col → 1 col)
- [ ] Цветные обложки-градиенты (зелёный, синий, оранжевый, бежевый)
- [ ] Тег «популярное» на первой карточке
- [ ] Hover: подъём карточки + тень
- [ ] Мета-строка: иконка часов + «~10 мин в день»

### 5.7 Final CTA
- [ ] Зелёный gradient-блок со скруглёнными углами
- [ ] Декоративные radial градиенты (псевдоэлементы)
- [ ] Заголовок + параграф + кнопка «Ответить на вопрос» + подпись «1 минута, без регистрации»
- [ ] Кнопка ведёт к встроенной форме (см. Этап 6)

### 5.8 Footer
- [ ] Логотип + название
- [ ] Ссылки: О проекте, Контакты, Telegram
- [ ] Копирайт

---

## Этап 6 — Форма обратной связи

### Вопрос в форме (из дизайна)
«Тебе было бы интересно такое приложение?»

### UI формы
- [ ] Компонент `SurveyForm` — встроен в страницу (не popup)
- [ ] Один вопрос + варианты ответа (radio/кнопки) + поле email (опционально)
- [ ] Состояния: idle → loading → success / error
- [ ] Анимация появления (Framer Motion)

### API Route (`/api/survey`)
- [ ] `POST /api/survey` принимает `{ answer, email?, lang }`
- [ ] Валидация входных данных
- [ ] Отправка в Telegram через `sendMessage` API:
  ```
  POST https://api.telegram.org/bot{TOKEN}/sendMessage
  body: { chat_id, text: "Новый ответ: ..." }
  ```
- [ ] Возвращает `{ success: true }` или ошибку

### Переменные окружения
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

---

## Этап 7 — SEO

- [ ] `metadata` объект в `layout.tsx`: title, description, keywords
- [ ] Open Graph теги: og:title, og:description, og:image (социальный превью)
- [ ] Создать `/public/og-image.png` (1200×630px)
- [ ] `robots.txt`
- [ ] `sitemap.xml` (через `next-sitemap` или вручную)
- [ ] `<html lang>` подтягивается из текущей локали

---

## Этап 8 — Анимации (Framer Motion)

- [ ] Плавающие карточки в Hero (бесконечный float вверх-вниз)
- [ ] Появление секций при скролле (`whileInView`, `viewport: { once: true }`)
- [ ] Hover-эффекты на карточках программ
- [ ] Плавное переключение языка (fade текста)

---

## Этап 9 — Финальная проверка

- [ ] Проверка адаптивности: 375px, 640px, 780px, 960px, 1280px
- [ ] Lighthouse audit: Performance > 90, SEO 100, Accessibility > 90
- [ ] Проверка формы: отправка → сообщение в Telegram
- [ ] Проверка переключения языка RU/EN
- [ ] Cross-browser: Chrome, Safari, Firefox
- [ ] Проверить деплой на Vercel

---

## Структура проекта

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx          # сборка всех секций
│   └── api/
│       └── survey/
│           └── route.ts      # POST handler → Telegram
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Kicker.tsx
│   │   ├── PhoneMockup.tsx
│   │   └── SectionShell.tsx
│   └── sections/
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── HowItWorks.tsx
│       ├── Differentiation.tsx
│       ├── Programs.tsx
│       ├── FinalCta.tsx
│       ├── SurveyForm.tsx
│       └── Footer.tsx
├── i18n/
│   └── routing.ts
└── messages/
    ├── ru.json
    └── en.json
```

---

## Порядок работы по веткам

```
main          → продакшн (деплой на Vercel)
dev           → основная ветка разработки
feat/setup    → этап 1-2
feat/design-system → этап 3
feat/i18n     → этап 4
feat/sections → этап 5
feat/form     → этап 6
feat/seo      → этап 7
```
