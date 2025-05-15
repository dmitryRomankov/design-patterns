export class InvalidShapeDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidShapeDataError';
  }
}
