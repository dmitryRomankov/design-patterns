import fs from 'fs';
import path from 'path';
import { logger } from '../utils/logger';
import { ShapeFactory } from '../factories/ShapeFactory';
import { Shape } from '../factories/Shape';

export class FileReader {
  static readFigureData(filePath: string, factory: ShapeFactory): Shape[] {
    const absPath = path.resolve(filePath);

    if (!fs.existsSync(absPath)) {
      logger.error(`File not found: ${absPath}`);
      return [];
    }

    const lines = fs
      .readFileSync(absPath, 'utf-8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#'));

    logger.info(`Read ${lines.length} lines from file: ${filePath}`);

    return this.#parse(lines, factory);
  }

  static #parse(lines: string[], factory: ShapeFactory): Shape[] {
    const shapes: Shape[] = [];

    for (const line of lines) {
      try {
        const shape = factory.createFromString(line);
        shapes.push(shape);
      } catch (err) {
        logger.warn(`Error in line "${line}": ${(err as Error).message}`);
      }
    }

    return shapes;
  }
}
