import pino from 'pino';
import fs from 'fs';
import path from 'path';

const logDir = path.resolve('./logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

export const logger = pino({
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
      {
        target: 'pino/file',
        options: {
          destination: path.join(logDir, 'app.log'),
          mkdir: true,
        },
      },
    ],
  },
});
