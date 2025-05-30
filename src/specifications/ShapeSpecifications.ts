import { Shape } from '../factories/Shape';
import { Point } from '../entities/Point';
import { Rectangle } from '../entities/Rectangle';
import { Sphere } from '../entities/Sphere';
import { Warehouse } from '../warehouse/Warehouse';

export class ShapeSpecifications {
  static isInFirstQuadrant(shape: Shape): boolean {
    const points: Point[] =
      shape instanceof Rectangle
        ? shape.vertices
        : shape instanceof Sphere
        ? [shape.center]
        : [];

    return points.every((p) => p.x > 0 && p.y > 0);
  }

  static areaInRange(min: number, max: number): (shape: Shape) => boolean {
    const warehouse = Warehouse.getInstance();
    return (shape: Shape) => {
      const area = warehouse.getArea(shape.id);
      return area !== undefined && area >= min && area <= max;
    };
  }

  static distanceFromOriginInRange(
    min: number,
    max: number
  ): (shape: Shape) => boolean {
    return (shape: Shape) => {
      const point =
        shape instanceof Sphere
          ? shape.center
          : shape instanceof Rectangle
          ? shape.vertices[0]
          : undefined;
      if (!point) return false;
      const distance = Math.sqrt(
        point.x ** 2 + point.y ** 2 + (point.z ?? 0) ** 2
      );
      return distance >= min && distance <= max;
    };
  }
}
