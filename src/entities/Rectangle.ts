import { Point } from './Point';
import { Observable } from '../observers/Observable';
import { Observer } from '../observers/Observer';

export class Rectangle implements Observable {
  private observers: Observer[] = [];

  constructor(
    public id: string,
    public vertices: [Point, Point, Point, Point]
  ) {}

  updateVertex(index: number, point: Point): void {
    this.vertices[index] = point;
    this.notify();
  }

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(): void {
    this.observers.forEach((o) => o.update(this.id));
  }
}
