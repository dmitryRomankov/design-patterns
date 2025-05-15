import { Shape } from './Shape';

export abstract class ShapeFactory {
  abstract createFromString(line: string): Shape;
}
