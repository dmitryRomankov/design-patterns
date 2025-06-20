import { IDataSource } from '../interfaces/IDataSource';
import { IVisitor } from '../interfaces/IVisitor';

export class DatabaseAdapter implements IDataSource {
  private data = { source: 'Database', content: [1, 2, 3, null, '5', 'NaN'] };

  getData() {
    return this.data;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this.getData(), 'Database');
  }
}
