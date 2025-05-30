import type { Observable } from '../observers/Observable';

export abstract class Shape implements Observable {
  constructor(public readonly id: string) {}

  abstract subscribe(observer: any): void;
  abstract unsubscribe(observer: any): void;
  abstract notify(): void;
}
