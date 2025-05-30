import { Shape } from '../factories/Shape';
import { Rectangle } from '../entities/Rectangle';
import { Sphere } from '../entities/Sphere';

export class ShapeComparators {
  static byIdAsc = (a: Shape, b: Shape) => a.id.localeCompare(b.id);

  static byXFirstPointAsc = (a: Shape, b: Shape) => {
    const aPoint =
      a instanceof Rectangle
        ? a.vertices[0]
        : a instanceof Sphere
        ? a.center
        : null;
    const bPoint =
      b instanceof Rectangle
        ? b.vertices[0]
        : b instanceof Sphere
        ? b.center
        : null;
    if (!aPoint || !bPoint) return 0;
    return aPoint.x - bPoint.x;
  };

  static byYFirstPointAsc = (a: Shape, b: Shape) => {
    const aPoint =
      a instanceof Rectangle
        ? a.vertices[0]
        : a instanceof Sphere
        ? a.center
        : null;
    const bPoint =
      b instanceof Rectangle
        ? b.vertices[0]
        : b instanceof Sphere
        ? b.center
        : null;
    if (!aPoint || !bPoint) return 0;
    return aPoint.y - bPoint.y;
  };
}
