import { Point } from './Point';

export class Rectangle {
  constructor(
    public id: string,
    public vertices: [Point, Point, Point, Point]
  ) {}
}
