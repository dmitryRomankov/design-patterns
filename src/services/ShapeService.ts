import { Shape } from '../factories/Shape';
import { RectangleFactory } from '../factories/RectangleFactory';
import { SphereFactory } from '../factories/SphereFactory';
import { WHITE_SPACE } from '../utils/constants';

export class ShapeService {
  static generateShapesFromInput(line: string): Shape {
    if (line.split(WHITE_SPACE).length === 8) {
      return new RectangleFactory().createFromString(line);
    } else if (line.split(WHITE_SPACE).length === 4) {
      return new SphereFactory().createFromString(line);
    } else {
      throw new Error('Wrong input');
    }
  }
}
