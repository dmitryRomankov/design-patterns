import { IDataSource } from '../interfaces/IDataSource';
import { IVisitor } from '../interfaces/IVisitor';

export class FileAdapter implements IDataSource {
  private fileData = { source: 'File', content: 'Text from file' };

  getData() {
    return this.fileData;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this.getData(), 'File');
  }
}
