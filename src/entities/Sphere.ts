import { Point } from './Point';
import { Observable } from '../observers/Observable';
import { Observer } from '../observers/Observer';

export class Sphere implements Observable {
  private observers: Observer[] = [];

  constructor(public id: string, public center: Point, public radius: number) {}

  setCenter(center: Point): void {
    this.center = center;
    this.notify();
  }

  setRadius(radius: number): void {
    this.radius = radius;
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
