import { logger } from '../utils/logger';
import { ShapeFactory } from '../factories/ShapeFactory';
import { Shape } from '../factories/Shape';
import { RectangleFactory } from '../factories/RectangleFactory';
import { SphereFactory } from '../factories/SphereFactory';

export class ShapeService {
  // static generateShapesFromInput(
  //   lines: string[],
  //   factory: ShapeFactory
  // ): Shape[] {
  //   const shapes: Shape[] = [];

  //   for (const line of lines) {
  //     try {
  //       const shape = factory.createFromString(line);
  //       shapes.push(shape);
  //     } catch (err) {
  //       logger.warn(`Error in line "${line}": ${(err as Error).message}`);
  //     }
  //   }

  //   return shapes;
  // }

  static generateShapesFromInput(line: string): Shape {
    if (line.split(/\s+/).length === 8) {
      return new RectangleFactory().createFromString(line);
    } else if (line.split(/\s+/).length === 4) {
      return new SphereFactory().createFromString(line);
    } else {
      throw new Error('Неизвестный формат строки');
    }
  }
}
