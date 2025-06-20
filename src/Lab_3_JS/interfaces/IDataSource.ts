import { IVisitor } from './IVisitor';

export interface IDataSource {
  getData(): any;
  accept(visitor: IVisitor): void;
}
