import { Rectangle } from '../entities/Rectangle';
import { Point } from '../entities/Point';

export class RectangleService {
  static getArea(rect: Rectangle): number {
    const [a, , c] = rect.vertices;
    const width = Math.abs(c.x - a.x);
    const height = Math.abs(c.y - a.y);
    return width * height;
  }

  static getPerimeter(rect: Rectangle): number {
    const [a, b, c, d] = rect.vertices;
    const dist = (p1: Point, p2: Point) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
    return dist(a, b) + dist(b, c) + dist(c, d) + dist(d, a);
  }

  static isSquare(rect: Rectangle): boolean {
    const [a, b, c, d] = rect.vertices;
    const dist = (p1: Point, p2: Point) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
    const side1 = dist(a, b);
    const side2 = dist(b, c);
    const diag1 = dist(a, c);
    const diag2 = dist(b, d);
    return side1 === side2 && diag1 === diag2;
  }

  static isConvex(rect: Rectangle): boolean {
    return this._isConvex(rect.vertices);
  }

  static isRhombus(rect: Rectangle): boolean {
    return this._isRhombus(rect.vertices);
  }

  static isTrapezoid(rect: Rectangle): boolean {
    return this._isTrapezoid(rect.vertices);
  }

  private static _isConvex(points: Point[]): boolean {
    const cross = (p1: Point, p2: Point, p3: Point): number => {
      const dx1 = p2.x - p1.x;
      const dy1 = p2.y - p1.y;
      const dx2 = p3.x - p2.x;
      const dy2 = p3.y - p2.y;
      return dx1 * dy2 - dy1 * dx2;
    };

    let prevSign = 0;
    for (let i = 0; i < 4; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % 4];
      const p3 = points[(i + 2) % 4];
      const crossProd = cross(p1, p2, p3);
      const sign = Math.sign(crossProd);

      if (sign !== 0) {
        if (prevSign !== 0 && sign !== prevSign) return false;
        prevSign = sign;
      }
    }

    return true;
  }

  private static _isRhombus(points: Point[]): boolean {
    const dist = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
    const d1 = dist(points[0], points[1]);
    return points.every((_, i) => dist(points[i], points[(i + 1) % 4]) === d1);
  }

  private static _isTrapezoid(points: Point[]): boolean {
    const slope = (a: Point, b: Point): number => {
      if (a.x === b.x) return Infinity;
      return (b.y - a.y) / (b.x - a.x);
    };

    const s1 = slope(points[0], points[1]);
    const s2 = slope(points[2], points[3]);
    const s3 = slope(points[1], points[2]);
    const s4 = slope(points[3], points[0]);

    const pair1 = s1 === s2;
    const pair2 = s3 === s4;

    return pair1 !== pair2 || (pair1 && !pair2) || (!pair1 && pair2);
  }
}
