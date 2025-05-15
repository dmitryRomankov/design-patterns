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

    const xValues = [coords[0], coords[2], coords[4], coords[6]];
    const yValues = [coords[1], coords[3], coords[5], coords[7]];
    const topLeft = new Point(Math.min(...xValues), Math.max(...yValues));
    const bottomRight = new Point(Math.max(...xValues), Math.min(...yValues));

    return new Rectangle(crypto.randomUUID(), topLeft, bottomRight);
  }
}
