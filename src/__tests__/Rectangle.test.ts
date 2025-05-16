import { Rectangle } from '../entities/Rectangle';
import { Point } from '../entities/Point';
import { RectangleService } from '../services/RectangleService';

describe('RectangleService', () => {
  const rect = new Rectangle('R1', [
    new Point(0, 3),
    new Point(4, 3),
    new Point(4, 0),
    new Point(0, 0),
  ]);

  it('should calculate area correctly', () => {
    const area = RectangleService.getArea(rect);
    expect(area).toBe(12);
  });

  it('should calculate perimeter correctly', () => {
    const perimeter = RectangleService.getPerimeter(rect);
    expect(perimeter).toBe(14);
  });

  it('should detect square correctly', () => {
    const square = new Rectangle('R2', [
      new Point(1, 2),
      new Point(3, 2),
      new Point(3, 0),
      new Point(1, 0),
    ]);
    const isSquare = RectangleService.isSquare(square);
    expect(isSquare).toBe(true);
  });

  it('should detect non-square correctly', () => {
    const nonSquare = new Rectangle('R3', [
      new Point(0, 5),
      new Point(3, 5),
      new Point(3, 1),
      new Point(0, 1),
    ]);
    const isSquare = RectangleService.isSquare(nonSquare);
    expect(isSquare).toBe(false);
  });

  it('should detect convex square', () => {
    const square = new Rectangle('Square', [
      new Point(0, 0),
      new Point(2, 0),
      new Point(2, 2),
      new Point(0, 2),
    ]);

    expect(RectangleService.isConvex(square)).toBe(true);
    expect(RectangleService.isSquare(square)).toBe(true);
  });

  it('should detect rhombus', () => {
    const rhombus = new Rectangle('Rhombus', [
      new Point(0, 0),
      new Point(2, 1),
      new Point(4, 0),
      new Point(2, -1),
    ]);

    expect(RectangleService.isRhombus(rhombus)).toBe(true);
    expect(RectangleService.isSquare(rhombus)).toBe(false);
  });
});
