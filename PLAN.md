# Rovo Landing — План реализации

## Стек
- **Framework**: Next.js 15 (App Router), React 19, TypeScript (strict)
- **Стили**: Tailwind CSS 4
- **Шрифт**: Manrope (Google Fonts)
- **Анимации**: Framer Motion
- **i18n**: React Context + localStorage (без смены URL — как в оригинале)
- **Деплой**: Vercel (автодеплой из main)
- **Форма**: собственная форма → API route → Telegram Bot (бот в отдельной репе)

---

## Этап 1 — Инициализация проекта

- [ ] `npx create-next-app@latest .` в `Z:\repos\rovo-landing` (TypeScript, Tailwind, App Router, ESLint)
- [ ] Установить зависимости: `framer-motion`, `clsx`
- [ ] Настроить `tsconfig.json`: `strict: true`, path alias `@/*`
- [ ] Tailwind: подключить Manrope через Google Fonts (`next/font/google`)
- [ ] Задать CSS-переменные в `globals.css` (см. раздел «Дизайн-система»)
- [ ] Настроить ESLint + Prettier
- [ ] `.env.local` и `.env.example`: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- [ ] Первый коммит и push в `main`

---

## Этап 2 — Деплой (Vercel)

- [ ] Подключить репо `melogo5/rovo-landing` к Vercel
- [ ] Добавить env переменные в Vercel Dashboard: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- [ ] Проверить автодеплой при пуше в `main`
- [ ] Настроить Preview Deployments для feature-веток

---

## Этап 3 — Дизайн-система

### CSS-переменные (`globals.css`)
```css
--green: #1D9E75;
--green-dark: #0F6E56;
--green-darker: #085041;
--green-soft: #E1F5EE;
--green-mid: #5DCAA5;
--green-pale: #9FE1CB;
--green-glow: rgba(29,158,117,.18);
--green-glow-mid: rgba(29,158,117,.14);
--green-shadow: rgba(29,158,117,.5);
--green-shadow-soft: rgba(29,158,117,.55);

--bg: #FBFBF9;          /* не белый! тёплый оттенок */
--surface: #FFFFFF;
--ink: #15151A;
--ink-2: #2C2C2A;
--ink-3: #5F5E5A;
--ink-4: #888780;
--ink-5: #B4B2A9;
--border: #ECEAE3;
--border-2: #D3D1C7;
--warm-soft: #FAEEDA;
--warm-mid: #EFB668;
--warm-ink: #854F0B;
--warm-ink-2: #633806;
--sand: #F5F1E8;

--radius: 18px;
--radius-lg: 28px;
--section-pad: 90px;    /* на mobile < 640px → * 0.72 */
```

### Ключевые детали типографики
- `h1`: `clamp(40px, 5.6vw, 68px)`, weight 800, letter-spacing -0.03em
- `h2`: `clamp(30px, 3.4vw, 46px)`, weight 700, letter-spacing -0.028em
- `.lead`: 18px → 16px на mobile
- Везде `text-wrap: balance` на заголовках

### Контейнер
- `max-width: 1240px`, `margin: 0 auto`, `padding: 0 32px`
- На mobile < 640px: `padding: 0 20px`

### Базовые компоненты (`src/components/ui/`)
- [ ] `Button` — варианты: `primary` (зелёный + тень), `ghost` (белый + border), `white` (белый на зелёном фоне CTA)
- [ ] `Kicker` — 3 варианта: `green` (default), `warm` (оранжевый), `muted` (серый + border)
- [ ] `SectionShell` — центрирующая обёртка 1240px
- [ ] `PhoneSkillTree` — мокап телефона с деревом навыков (Hero)
- [ ] `PhoneLesson` — мокап телефона с экраном урока (Differentiation)

---

## Этап 4 — i18n (RU / EN)

**Подход**: React Context + localStorage, без смены URL (как в оригинале).
Это проще next-intl и достаточно для лендинга. Для SEO добавим `<link rel="alternate">` теги.

- [ ] `src/context/LangContext.tsx` — `LangProvider`, хук `useLang()`
- [ ] Типы: `type Lang = 'ru' | 'en'`
- [ ] Сохранение в localStorage (`rovo_lang`), дефолт `ru`
- [ ] Файлы переводов: `src/messages/ru.ts` и `src/messages/en.ts` (типизированные объекты)
- [ ] Вынести все тексты из макета в эти файлы (nav, hero, problem, how, diff, programs, cta, footer)
- [ ] Хук `useT()` — возвращает нужный словарь по текущей локали
- [ ] Компонент `LanguageToggle` — кнопки RU / EN, active-стиль как в макете

---

## Этап 5 — Верстка секций

### 5.1 Nav
- [ ] `position: sticky; top: 0; z-index: 50`
- [ ] `backdrop-filter: saturate(140%) blur(14px); background: rgba(251,251,249,.75)`
- [ ] `border-bottom: 0.5px solid var(--border)`
- [ ] Логотип: SVG inline (силуэт игрока + мяч), фон квадрата `var(--green)`, `border-radius: 9px`
- [ ] CTA «Хочу попробовать» — скрыта на `< 720px`

### 5.2 Hero
- [ ] Фоновый radial gradient справа-снизу (через `::before` на `.hero`)
- [ ] Grid: `1.05fr 0.95fr` → на `< 960px` одна колонка
- [ ] H1: три строки с разными стилями:
  - Строка 1, 2: слово в `<span>` с `color: var(--green)`
  - Строка 3: слово в `<span>` с псевдо-подчёркиванием (НЕ `text-decoration`) — `::after` рисует жёлтый прямоугольник позади текста (`background: var(--warm-mid); opacity: 0.5`)
- [ ] Мета-строка: пульсирующая зелёная точка (`@keyframes pulse` с box-shadow), «iOS · Android»
- [ ] **Phone mockup (PhoneSkillTree)**:
  - Рамка телефона: `width: 300px; border-radius: 38px; box-shadow: 0 40px 80px -30px ...`
  - Зелёная полоска сверху (4px)
  - Шапка: приветствие + имя + streak-pill (`🔥 7 дней`) + XP прогресс-бар (62% заполнен)
  - Лейбл «МОЙ ПУТЬ»
  - Дерево навыков — 5 уровней узлов с коннекторами:
    - ✓ «Основы игры» (done, зелёный)
    - ✓ «Стойка и перемещение» (done)
    - ✓ «Верхняя передача» + ✓ «Нижняя передача» (done, в ряд)
    - ▶ «Атака с разбега · урок 3 из 8 · сейчас» (active, светло-зелёный border)
    - 🔒 «Верхняя подача» + 🔒 «Блок» (locked, серые)
  - Bottom nav: 4 иконки (Путь — active зелёный, Прогресс, Награды, Профиль)
  - Radial gradient-ореол за телефоном
- [ ] **Плавающие карточки** (Framer Motion):
  - fc-1 (левый верх): иконка 🔥 + «7 дней подряд»
  - fc-2 (правый низ): иконка 🏆 (warm) + «+30 XP»
  - Анимация: `translateY(0) → translateY(-8px)` за 6s, infinite, fc-2 reverse

### 5.3 Problem
- [ ] Фон: `linear-gradient(to bottom, transparent 0, var(--sand) 40%, var(--sand) 100%)`
- [ ] Grid: `1fr 1fr` → на `< 780px` одна колонка
- [ ] Карточка A (Новичок): зелёный тег + иконка-декор в правом верхнем углу + цитата + подсказка с иконкой 💡
- [ ] Карточка B (Любитель): warm-тег + та же структура
- [ ] Разделитель в карточке — dashed border-top

### 5.4 How it works
- [ ] Grid: `repeat(3, 1fr)` → на `< 860px` одна колонка
- [ ] Каждый шаг: большой номер («01», «02», «03») как декоративный фон (`font-size: 54px; color: var(--green-soft)`)
- [ ] Иконка в зелёном квадрате с тенью (`box-shadow: 0 12px 24px -10px var(--green-shadow-soft)`)
- [ ] Заголовок + описание

### 5.5 Differentiation
- [ ] **Инсет-стиль**: `background: var(--ink); border-radius: 36px; margin: 0 32px`
- [ ] На `< 960px`: `margin: 0 20px; border-radius: 28px`
- [ ] Декоративный orb: `radial-gradient` в правом верхнем углу блока
- [ ] Grid: `1.1fr 0.9fr` → на `< 960px` одна колонка
- [ ] Текст левая колонка: kicker (зелёный полупрозрачный на тёмном), H2 (белый) с `<em>` акцентом `var(--green-mid)`
- [ ] Список: 3 пункта ✓ (зелёный кружок) + 2 пункта ✗ (серый кружок, `text-decoration: line-through`, opacity 0.45)
- [ ] **Phone mockup (PhoneLesson)**:
  - `width: 280px`, тёмная рамка
  - Шапка: кнопка «←», заголовок «Атака с разбега», прогресс-бар (37%), «3/8», +30 XP badge
  - Видео-плашка: зелёный gradient + кнопка Play с blur-backdrop
  - Контент: название урока «Разбег: четыре шага», описание, блок «Задание», кнопка «Задание выполнено» (зелёная)

### 5.6 Programs
- [ ] Grid: `repeat(4, 1fr)` → `repeat(2, 1fr)` на `< 1080px` → `1fr` на `< 560px`
- [ ] Hover: `translateY(-4px)` + усиленная тень + зелёный border
- [ ] Цветные обложки-градиенты (130px высота, `border-radius: 16px`):
  - c1: `#9FE1CB → #5DCAA5` (зелёный) — Новичок
  - c2: `#BFE2F5 → #7FB5DC` (синий) — Уверенный приём
  - c3: `#FAEEDA → #EFB668` (оранжевый) — Нападающий
  - c4: `#F5D7A7 → #E89B4C` (бежевый) — Пляж
- [ ] Иконка программы — правый верхний угол обложки, белый полупрозрачный квадрат
- [ ] Тег «популярное» (warm-стиль) — только на первой карточке
- [ ] Мета-строка: `⏱ ~10 мин в день`, dashed border-top

### 5.7 Final CTA
- [ ] Зелёный gradient: `linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%)`
- [ ] `border-radius: 36px` → `28px` на mobile
- [ ] Два декоративных radial gradient: `::before` (верх-лево) + `::after` (низ-право)
- [ ] Белый kicker, белый заголовок H2, белый параграф (opacity 0.85)
- [ ] Кнопка: `background: #fff; color: var(--green-dark)` — ведёт к форме опроса ниже
- [ ] Подпись: «⏱ одна минута — без регистрации»

### 5.8 Footer
- [ ] Flex row (`justify-content: space-between`), `flex-wrap: wrap`
- [ ] Логотип + название «Rovo»
- [ ] Ссылки: «О проекте», «Контакты», «Telegram»
- [ ] Копирайт: «© 2026 · Сделано с любовью к волейболу»

---

## Этап 6 — Форма обратной связи

### UI (`SurveyForm` компонент, встроен в страницу под Final CTA)
- [ ] Вопрос: «Тебе было бы интересно такое приложение?»
- [ ] Варианты ответа (кнопки-чипы): «Да, с удовольствием», «Зависит от цены», «Не уверен(а)»
- [ ] Опциональное поле email (подпись: «чтобы сообщить о запуске»)
- [ ] Состояния: `idle → loading → success / error`
- [ ] Анимация появления и перехода состояний (Framer Motion)

### API Route (`src/app/api/survey/route.ts`)
- [ ] `POST /api/survey` — принимает `{ answer: string, email?: string, lang: 'ru' | 'en' }`
- [ ] Валидация: `answer` обязателен, `email` опционален (проверить формат)
- [ ] Rate limiting: простая защита (можно через заголовки или in-memory map)
- [ ] Отправка в Telegram:
  ```
  POST https://api.telegram.org/bot{TOKEN}/sendMessage
  {
    chat_id: TELEGRAM_CHAT_ID,
    text: "🏐 Новый ответ на опрос\n\nОтвет: {answer}\nEmail: {email || '—'}\nЯзык: {lang}"
  }
  ```
- [ ] Ответ: `{ success: true }` или `{ error: '...' }` с нужным HTTP-статусом

### Переменные окружения
```
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

---

## Этап 7 — SEO

- [ ] `metadata` в `layout.tsx`: `title`, `description`, `keywords`
- [ ] Open Graph: `og:title`, `og:description`, `og:image` (1200×630px)
- [ ] Создать `/public/og-image.png`
- [ ] `<link rel="alternate" hreflang="ru">` и `hreflang="en"` (для двуязычного лендинга)
- [ ] `robots.txt` (`/public/robots.txt`)
- [ ] `sitemap.xml` (вручную или через `next-sitemap`)
- [ ] `<html lang>` соответствует текущей локали

---

## Этап 8 — Анимации (Framer Motion)

- [ ] Плавающие карточки Hero: `animate={{ y: [0, -8, 0] }}`, `repeat: Infinity`, `duration: 6s`, fc-2 с задержкой
- [ ] Пульсирующая точка в Hero meta: CSS `@keyframes` (box-shadow 0 → 10px → 0)
- [ ] Появление секций при скролле: `whileInView={{ opacity: 1, y: 0 }}`, `viewport: { once: true }`
- [ ] Hover карточек программ: `whileHover={{ y: -4 }}`
- [ ] Плавный переход состояний формы (fade + slide)

---

## Этап 9 — Финальная проверка

- [ ] Адаптивность на всех breakpoints: 375px / 560px / 640px / 780px / 960px / 1080px / 1280px
- [ ] Lighthouse: Performance > 90, SEO 100, Accessibility > 90
- [ ] Проверка формы: отправка → сообщение в Telegram
- [ ] Проверка переключения языка RU / EN (все тексты меняются, localStorage сохраняет)
- [ ] Cross-browser: Chrome, Safari, Firefox
- [ ] Проверить деплой на Vercel

---

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # metadata, LangProvider, шрифт Manrope
│   ├── page.tsx            # сборка всех секций
│   ├── globals.css         # CSS-переменные, reset
│   └── api/
│       └── survey/
│           └── route.ts    # POST → Telegram
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Kicker.tsx
│   │   ├── SectionShell.tsx
│   │   ├── PhoneSkillTree.tsx   # мокап Hero
│   │   └── PhoneLesson.tsx      # мокап Diff
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
├── context/
│   └── LangContext.tsx     # RU/EN без смены URL
└── messages/
    ├── ru.ts
    └── en.ts
```

---

## Ветки

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
