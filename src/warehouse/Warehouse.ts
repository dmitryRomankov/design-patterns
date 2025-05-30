export class Warehouse {
  private static instance: Warehouse;
  private data = new Map<
    string,
    { area?: number; perimeter?: number; volume?: number }
  >();

  private constructor() {}

  static getInstance(): Warehouse {
    if (!Warehouse.instance) {
      Warehouse.instance = new Warehouse();
    }
    return Warehouse.instance;
  }

  update(
    id: string,
    props: { area?: number; perimeter?: number; volume?: number }
  ): void {
    this.data.set(id, props);
  }

  get(id: string) {
    return this.data.get(id);
  }

  getArea(id: string): number | undefined {
    return this.data.get(id)?.area;
  }

  getPerimeter(id: string): number | undefined {
    return this.data.get(id)?.perimeter;
  }

  getVolume(id: string): number | undefined {
    return this.data.get(id)?.volume;
  }
}
