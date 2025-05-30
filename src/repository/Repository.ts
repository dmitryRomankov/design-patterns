import { Shape } from '../factories/Shape';

export interface Repository {
  add(shape: Shape): void;
  removeById(id: string): void;
  findById(id: string): Shape | undefined;
  findByName(name: string): Shape[];
  find(predicate: (shape: Shape) => boolean): Shape[];
  getAll(): Shape[];
}
