import { IVisitor } from './IVisitor';

export interface IDataSource {
  getData(): void;
  accept(visitor: IVisitor): void;
}
