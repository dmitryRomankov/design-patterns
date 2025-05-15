import { ShapeFactory } from './ShapeFactory';
import { Sphere } from '../entities/Sphere';
import { Point } from '../entities/Point';
import { InvalidShapeDataError } from '../utils/errors';
import { WHITE_SPACE } from '../utils/constants';

export class SphereFactory extends ShapeFactory {
  createFromString(line: string): Sphere {
    const parts = line.trim().split(WHITE_SPACE).map(Number);
    if (parts.length !== 4 || parts.some(isNaN)) {
      throw new InvalidShapeDataError('Incorrect data for the sphere');
    }

    const [x, y, z, r] = parts;

    if (r <= 0) {
      throw new InvalidShapeDataError('Radius should be positive');
    }

    return new Sphere(crypto.randomUUID(), new Point(x, y, z), r);
  }
}
