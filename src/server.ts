import express from 'express';
import { main } from './index.js'; // обязательно .js, если ты используешь ESM
import { logger } from './utils/logger.js';

const app = express();
const PORT = 3000;

app.get('/health', (_, res) => {
  res.send('✅ Сервер работает');
});

// Автоматический запуск при старте сервера
(async () => {
  try {
    logger.info('▶️ Автоматический запуск main() из index.ts');
    await main(); // или просто main(), если он не async
  } catch (error) {
    logger.error(`Ошибка при запуске main: ${(error as Error).message}`);
  }
})();

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
