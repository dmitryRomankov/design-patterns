import { ShapeSpecifications } from '../../src/specifications/ShapeSpecifications';
import { Rectangle } from '../../src/entities/Rectangle';
import { Point } from '../../src/entities/Point';
import { Warehouse } from '../../src/warehouse/Warehouse';

describe('ShapeSpecifications', () => {
  const rect = new Rectangle('r1', [
    new Point(1, 1),
    new Point(2, 1),
    new Point(2, 2),
    new Point(1, 2),
  ]);

  beforeAll(() => {
    Warehouse.getInstance().update('r1', { area: 1 });
  });

  it('identifies shape in first quadrant', () => {
    expect(ShapeSpecifications.isInFirstQuadrant(rect)).toBe(true);
  });

  it('matches area within range', () => {
    const spec = ShapeSpecifications.areaInRange(0.5, 1.5);
    expect(spec(rect)).toBe(true);
  });

  it('matches distance from origin', () => {
    const spec = ShapeSpecifications.distanceFromOriginInRange(0, 10);
    expect(spec(rect)).toBe(true);
  });
});
