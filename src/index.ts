import { logger } from './utils/logger';
import { RectangleFactory } from './factories/RectangleFactory';
import { SphereFactory } from './factories/SphereFactory';
import { FileReader } from './services/FileReader';
import { ShapeRepository } from './repository/ShapeRepository';
import { ShapeSpecifications } from './specifications/ShapeSpecifications';
import { ShapeComparators } from './comparators/ShapeComparators';
import { Warehouse } from './warehouse/Warehouse';
import { Rectangle } from './entities/Rectangle';
import { Sphere } from './entities/Sphere';

const RECTANGLES_PATH = './data/rectangles.txt';
const SPHERES_PATH = './data/spheres.txt';

export function main(): void {
  logger.info('Start loading figures');

  const repository = new ShapeRepository();

  const rectReader = new FileReader(RECTANGLES_PATH, repository);
  const sphereReader = new FileReader(SPHERES_PATH, repository);

  const rectangles = rectReader.readFigureData(new RectangleFactory());
  const spheres = sphereReader.readFigureData(new SphereFactory());

  logger.info(
    `Loaded ${rectangles.length} rectangles и ${spheres.length} spheres`
  );

  rectangles.forEach((rect) => {
    if (rect instanceof Rectangle) {
      const { area, perimeter } = Warehouse.getInstance().get(rect.id) || {};
      const isSquare =
        rect.vertices.length === 4 &&
        rect.vertices.every((p) => typeof p.x === 'number');
      logger.info(
        `[Rectangle ${rect.id}] area=${area}, perimeter=${perimeter}, isSquare=${isSquare}`
      );
    }
  });

  spheres.forEach((sphere) => {
    if (sphere instanceof Sphere) {
      const { area, volume } = Warehouse.getInstance().get(sphere.id) || {};
      const intersects = sphere.center.z <= sphere.radius;
      logger.info(
        `[Sphere ${sphere.id}] volume=${volume}, surfaceArea=${area}, intersectsXY=${intersects}`
      );
    }
  });

  logger.info('Search figures in the first quadrant');
  const inQuadrant = repository.find(ShapeSpecifications.isInFirstQuadrant);
  inQuadrant.forEach((shape, i) => logger.info(`ShapeId ${i + 1} ${shape.id}`));

  logger.info('Figures sort by X of the first point');
  const sorted = repository.getAll().sort(ShapeComparators.byXFirstPointAsc);
  sorted.forEach((s, i) => logger.info(`Figure ${i + 1}: ${s.id}`));

  logger.info('Loading ended');
}

main();
