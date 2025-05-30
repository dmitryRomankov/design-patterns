import express from 'express';
import { main } from './index';
import { logger } from './utils/logger';

const app = express();
const PORT = 3000;

app.get('/health', (_, res) => {
  res.send('Server works');
});

(async () => {
  try {
    logger.info('Starting server');
    main();
  } catch (error) {
    logger.error(`Error during start: ${(error as Error).message}`);
  }
})();

app.listen(PORT, () => {
  console.log(`Server listen http://localhost:${PORT}`);
});
