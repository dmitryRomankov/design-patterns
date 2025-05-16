import { logger } from './utils/logger.js';
import { RectangleFactory } from './factories/RectangleFactory';
import { SphereFactory } from './factories/SphereFactory';
import { RectangleService } from './services/RectangleService';
import { SphereService } from './services/SphereService';
import { FileReader as FR } from './services/FileReader';
import { Rectangle } from './entities/Rectangle';
import { Sphere } from './entities/Sphere';

const RECTANGLES_PATH = './data/rectangles.txt';
const SPHERE_PATH = './data/spheres.txt';

export function main(): void {
  logger.info('Start parsing figures');

  const rectangles = FR.readFigureData(RECTANGLES_PATH, new RectangleFactory());
  const spheres = FR.readFigureData(SPHERE_PATH, new SphereFactory());

  rectangles.forEach((rect) => {
    if (rect instanceof Rectangle) {
      const area = RectangleService.getArea(rect);
      const perimeter = RectangleService.getPerimeter(rect);
      const isSquare = RectangleService.isSquare(rect);
      const isConvex = RectangleService.isConvex(rect);
      const isRhombus = RectangleService.isRhombus(rect);
      const isTrapezoid = RectangleService.isTrapezoid(rect);
      logger.info(
        `[Rectangle ${rect.id}] Area: ${area}, Perimeter: ${perimeter}, IsSquare: ${isSquare}, IsConvex: ${isConvex}, IsRhombus: ${isRhombus}, isTrapezoid: ${isTrapezoid}`
      );
    }
  });

  spheres.forEach((sphere) => {
    if (sphere instanceof Sphere) {
      const volume = SphereService.getVolume(sphere);
      const surface = SphereService.getSurfaceArea(sphere);
      const touchesXY = SphereService.intersectsPlane(sphere, 'xy');
      logger.info(
        `[Sphere ${sphere.id}] Volume: ${volume}, SurfaceArea: ${surface}, Intersects XY: ${touchesXY}`
      );
    }
  });

  logger.info('Parsing ended');
}

main();
