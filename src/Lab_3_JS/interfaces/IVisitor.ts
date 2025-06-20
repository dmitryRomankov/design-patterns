export interface IVisitor {
  visit(data: any, sourceName: string): void;
}
