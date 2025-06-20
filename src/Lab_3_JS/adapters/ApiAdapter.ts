import { IDataSource } from '../interfaces/IDataSource';
import { IVisitor } from '../interfaces/IVisitor';

export class ApiAdapter implements IDataSource {
  private response = {
    source: 'API',
    content: { name: 'John', lastName: 'Doe' },
  };

  getData() {
    return this.response;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this.getData(), 'API');
  }
}
