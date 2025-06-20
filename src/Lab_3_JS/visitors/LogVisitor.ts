import { IVisitor } from '../interfaces/IVisitor';
import { logger } from '../../utils/logger';

export class LogVisitor implements IVisitor {
  visit(data: any, sourceName: string): void {
    logger.info(
      `[LOG] Source: ${sourceName} | Content: ${JSON.stringify(data.content)}`
    );
  }
}
