import { ShapeRepository } from '../repository/ShapeRepository';
import { Rectangle } from '../../src/entities/Rectangle';
import { Point } from '../../src/entities/Point';

const repo = new ShapeRepository();

const rect1 = new Rectangle('r1', [
  new Point(0, 0),
  new Point(1, 0),
  new Point(1, 1),
  new Point(0, 1),
]);

const rect2 = new Rectangle('r2', [
  new Point(2, 2),
  new Point(3, 2),
  new Point(3, 3),
  new Point(2, 3),
]);

describe('ShapeRepository', () => {
  it('should add and retrieves a shape by ID', () => {
    repo.add(rect1);
    expect(repo.findById('r1')).toBe(rect1);
  });

  it('should remove shape by ID', () => {
    repo.add(rect2);
    repo.removeById('r2');
    expect(repo.findById('r2')).toBeUndefined();
  });

  it('should filter shapes using predicate', () => {
    const result = repo.find((s) => s.id === 'r1');
    expect(result.length).toBe(1);
    expect(result[0].id).toBe('r1');
  });
});
