# Eternal May

Красивый таймлайн-календарь личных событий (React + Vite + TypeScript + Tailwind + Framer Motion).

## Запуск
```bash
npm install
npm run dev
```

## Сборка
```bash
npm run build
npm run preview
```

## Импорт/экспорт
- Экспорт JSON — кнопка в интерфейсе.
- Экспорт iCal — можно импортировать в календарь.
- Импорт JSON — загрузка файла в интерфейсе.

## Импорт переписки
Чаты загружаются из HTML-архивов (кодировка cp1251). Скрипт парсит сообщения и сохраняет их в `server/data/chats/{chatId}.json` вместе с индексом по ID.

```bash
# источник с HTML-файлами (например, messages/239287653/*.html)
npm run import:chat -- --source ./messages/239287653 --chat-id friend
```

Необязательный флаг `--out` позволяет указать другую директорию для сохранения.
