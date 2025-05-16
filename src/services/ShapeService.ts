import fs from 'fs';
import path from 'path';
import { logger } from '../utils/logger';
import { ShapeFactory } from '../factories/ShapeFactory';
import { Shape } from '../factories/Shape';

export class ShapeService {
  static generateShapesFromInput(
    lines: string[],
    factory: ShapeFactory
  ): Shape[] {
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
