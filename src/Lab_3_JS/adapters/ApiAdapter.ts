import { getDataFromApi } from '../../utils/api';
import { IDataSource } from '../interfaces/IDataSource';
import { IVisitor } from '../interfaces/IVisitor';

export class ApiAdapter implements IDataSource {
  private response = {
    source: 'API',
    content: getDataFromApi(),
  };

  getData() {
    return this.response;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this.getData(), 'API');
  }
}
