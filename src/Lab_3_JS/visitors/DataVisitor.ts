import { IVisitor } from '../interfaces/IVisitor';
import { logger } from '../../utils/logger';

export class DataVisitor implements IVisitor {
  visit(data: any, sourceName: string): void {
    logger.info(
      `[DataVisitor] Source Name: ${sourceName} | Content ${JSON.stringify(
        data
      )}`
    );
  }
}
