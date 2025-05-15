import { Rectangle } from '../entities/Rectangle';

export class RectangleService {
  static getArea(rect: Rectangle): number {
    const width = Math.abs(rect.bottomRight.x - rect.topLeft.x);
    const height = Math.abs(rect.bottomRight.y - rect.topLeft.y);
    return width * height;
  }

  static getPerimeter(rect: Rectangle): number {
    const width = Math.abs(rect.bottomRight.x - rect.topLeft.x);
    const height = Math.abs(rect.bottomRight.y - rect.topLeft.y);
    return 2 * (width + height);
  }

  static isSquare(rect: Rectangle): boolean {
    const width = Math.abs(rect.bottomRight.x - rect.topLeft.x);
    const height = Math.abs(rect.bottomRight.y - rect.topLeft.y);
    return width === height;
  }
}
