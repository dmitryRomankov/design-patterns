import { Observer } from './Observer';
import { Shape } from '../factories/Shape';
import { Warehouse } from '../warehouse/Warehouse';
import { Rectangle } from '../entities/Rectangle';
import { Sphere } from '../entities/Sphere';
import { RectangleService } from '../services/RectangleService';
import { SphereService } from '../services/SphereService';

export class ShapeObserver implements Observer {
  constructor(private shape: Shape) {}

  update(shapeId: string): void {
    const warehouse = Warehouse.getInstance();

    if (this.shape instanceof Rectangle) {
      const area = RectangleService.getArea(this.shape);
      const perimeter = RectangleService.getPerimeter(this.shape);
      warehouse.update(shapeId, { area, perimeter });
    }

    if (this.shape instanceof Sphere) {
      const volume = SphereService.getVolume(this.shape);
      const surface = SphereService.getSurfaceArea(this.shape);
      warehouse.update(shapeId, { volume, area: surface });
    }
  }
}
