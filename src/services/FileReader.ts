import fs from 'fs';
import path from 'path';
import { ShapeFactory } from '../factories/ShapeFactory';
import { InMemoryShapeRepository } from '../repository/InMemoryShapeRepository';
import { ShapeObserver } from '../observers/ShapeObserver';
import { Shape } from '../factories/Shape';
import { logger } from '../utils/logger';

export class FileReader {
  constructor(
    private filePath: string,
    private repository: InMemoryShapeRepository
  ) {}

  readFigureData(factory: ShapeFactory): Shape[] {
    const fullPath = path.resolve(this.filePath);

    const lines = fs
      .readFileSync(fullPath, 'utf-8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#'));

    const loadedShapes: Shape[] = [];

    lines.forEach((line, index) => {
      try {
        const shape = factory.createFromString(line);
        if (shape) {
          this.repository.add(shape);

          const observer = new ShapeObserver(shape);
          shape.subscribe(observer);
          shape.notify();

          loadedShapes.push(shape);
        }
      } catch (err) {
        logger.error(
          `Line ${index + 1} is missed: "${line}". Reason: ${
            (err as Error).message
          }`
        );
      }
    });

    return loadedShapes;
  }
}
