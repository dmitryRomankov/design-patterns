import { ShapeFactory } from './ShapeFactory';
import { Rectangle } from '../entities/Rectangle';
import { Point } from '../entities/Point';
import { InvalidShapeDataError } from '../utils/errors';
import { WHITE_SPACE } from '../utils/constants';

export class RectangleFactory extends ShapeFactory {
  createFromString(line: string): Rectangle {
    const coords = line.trim().split(WHITE_SPACE).map(Number);
    if (coords.length !== 8 || coords.some(isNaN)) {
      throw new InvalidShapeDataError('Incorrect data for the rectangle');
    }

    const points: [Point, Point, Point, Point] = [
      new Point(coords[0], coords[1]),
      new Point(coords[2], coords[3]),
      new Point(coords[4], coords[5]),
      new Point(coords[6], coords[7]),
    ];

    return new Rectangle(crypto.randomUUID(), points);
  }
}
