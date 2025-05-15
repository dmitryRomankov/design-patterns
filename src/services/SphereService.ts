import { Sphere } from '../entities/Sphere';

type CoordinatePlane = 'xy' | 'yz' | 'xz';

export class SphereService {
  static getSurfaceArea(sphere: Sphere): number {
    return 4 * Math.PI * Math.pow(sphere.radius, 2);
  }

  static getVolume(sphere: Sphere): number {
    return (4 / 3) * Math.PI * Math.pow(sphere.radius, 3);
  }

  /**
   * Проверяет, касается ли сфера указанной координатной плоскости
   * 'xy' → z = 0
   * 'yz' → x = 0
   * 'xz' → y = 0
   */
  static intersectsPlane(sphere: Sphere, plane: CoordinatePlane): boolean {
    switch (plane) {
      case 'xy':
        return Math.abs(sphere.center.z!) <= sphere.radius;
      case 'yz':
        return Math.abs(sphere.center.x) <= sphere.radius;
      case 'xz':
        return Math.abs(sphere.center.y) <= sphere.radius;
      default:
        return false;
    }
  }
}
