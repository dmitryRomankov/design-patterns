import { Rectangle } from '../entities/Rectangle';
import { Point } from '../entities/Point';
import { RectangleService } from '../services/RectangleService';

describe('RectangleService', () => {
  const rect = new Rectangle('R1', new Point(0, 3), new Point(4, 0));

  it('should calculate area correctly', () => {
    const area = RectangleService.getArea(rect);
    expect(area).toBe(12);
  });

  it('should calculate perimeter correctly', () => {
    const perimeter = RectangleService.getPerimeter(rect);
    expect(perimeter).toBe(14);
  });

  it('should detect square correctly', () => {
    const square = new Rectangle('R2', new Point(1, 2), new Point(3, 0));
    const isSquare = RectangleService.isSquare(square);
    expect(isSquare).toBe(true);
  });

  it('should detect non-square correctly', () => {
    const nonSquare = new Rectangle('R3', new Point(0, 5), new Point(3, 1));
    const isSquare = RectangleService.isSquare(nonSquare);
    expect(isSquare).toBe(false);
  });
});
