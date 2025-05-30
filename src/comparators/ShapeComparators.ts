import { Shape } from '../factories/Shape';
import { Rectangle } from '../entities/Rectangle';
import { Sphere } from '../entities/Sphere';

type Axis = 'x' | 'y';

const getFirstPoint = (p: Shape) =>
  p instanceof Rectangle
    ? p.vertices[0]
    : p instanceof Sphere
    ? p.center
    : null;

export class ShapeComparator {
  static byIdAsc = (a: Shape, b: Shape) => a.id.localeCompare(b.id);

  static firstPointByAxisAsc = (a: Shape, b: Shape, axis: Axis) => {
    const aPoint = getFirstPoint(a);
    const bPoint = getFirstPoint(b);
    if (!aPoint || !bPoint) return 0;
    return aPoint[axis] - bPoint[axis];
  };
}
