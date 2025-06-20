import { IVisitor } from '../interfaces/IVisitor';
import { logger } from '../../utils/logger';

export class DataVisitor implements IVisitor {
  visit(data: any, sourceName: string): void {
    logger.info(`Parsing data from ${sourceName}: ${JSON.stringify(data)}`);
  }
}
