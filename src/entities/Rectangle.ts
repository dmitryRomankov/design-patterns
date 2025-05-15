import { Point } from './Point';

export class Rectangle {
  constructor(
    public readonly id: string,
    public readonly topLeft: Point,
    public readonly bottomRight: Point
  ) {}
}
