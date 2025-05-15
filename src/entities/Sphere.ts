import { Point } from './Point';

export class Sphere {
  constructor(
    public readonly id: string,
    public readonly center: Point,
    public readonly radius: number
  ) {}
}
