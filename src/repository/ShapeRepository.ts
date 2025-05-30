import { Shape } from '../factories/Shape';
import { Repository } from './Repository';

export class ShapeRepository implements Repository {
  private shapes: Shape[] = [];

  add(shape: Shape): void {
    this.shapes.push(shape);
  }

  removeById(id: string): void {
    this.shapes = this.shapes.filter((shape) => shape.id !== id);
  }

  findById(id: string): Shape | undefined {
    return this.shapes.find((shape) => shape.id === id);
  }

  findByName(name: string): Shape[] {
    return this.shapes.filter((shape) => shape.id === name);
  }

  find(predicate: (shape: Shape) => boolean): Shape[] {
    return this.shapes.filter(predicate);
  }

  getAll(): Shape[] {
    return [...this.shapes];
  }
}
