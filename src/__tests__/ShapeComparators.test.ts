import { ShapeComparators } from '../../src/comparators/ShapeComparators';
import { Rectangle } from '../../src/entities/Rectangle';
import { Point } from '../../src/entities/Point';

const r1 = new Rectangle('a', [
  new Point(1, 1),
  new Point(2, 1),
  new Point(2, 2),
  new Point(1, 2),
]);

const r2 = new Rectangle('b', [
  new Point(3, 1),
  new Point(4, 1),
  new Point(4, 2),
  new Point(3, 2),
]);

describe('ShapeComparators', () => {
  it('should compare by ID ascending', () => {
    const result = [r2, r1].sort(ShapeComparators.byIdAsc);
    expect(result[0]).toBe(r1);
  });

  it('should compare by X of first point ascending', () => {
    const result = [r2, r1].sort((a, b) =>
      ShapeComparators.firstPointByAxisAsc(a, b, 'x')
    );
    expect(result[0]).toBe(r1);
  });

  it('should compare by Y of first point ascending', () => {
    const result = [r1, r2].sort((a, b) =>
      ShapeComparators.firstPointByAxisAsc(a, b, 'y')
    );
    expect(result[0]).toBe(r1);
  });
});
