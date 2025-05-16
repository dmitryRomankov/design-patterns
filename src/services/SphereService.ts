import { Sphere } from '../entities/Sphere';

type CoordinatePlane = 'xy' | 'yz' | 'xz';

export class SphereService {
  static getSurfaceArea(sphere: Sphere): number {
    return 4 * Math.PI * Math.pow(sphere.radius, 2);
  }

  static getVolume(sphere: Sphere): number {
    return (4 / 3) * Math.PI * Math.pow(sphere.radius, 3);
  }

  static intersectsPlane(sphere: Sphere, plane: CoordinatePlane): boolean {
    const d = this._getDistanceFromCenterToPlane(sphere, plane);
    return d <= sphere.radius;
  }

  static getVolumeRatioAfterCut(
    sphere: Sphere,
    plane: CoordinatePlane
  ): number {
    const d = this._getCoordinate(sphere.center, plane);
    const R = sphere.radius;

    if (Math.abs(d) >= R) {
      return 0; // no intersect
    }

    const h1 = R - Math.abs(d);
    const h2 = R + Math.abs(d);

    const v1 = (1 / 3) * Math.PI * h1 ** 2 * (3 * R - h1);
    const v2 = (1 / 3) * Math.PI * h2 ** 2 * (3 * R - h2);

    const smaller = Math.min(v1, v2);
    const larger = Math.max(v1, v2);
    return Number((smaller / larger).toFixed(4));
  }

  private static _getDistanceFromCenterToPlane(
    sphere: Sphere,
    plane: CoordinatePlane
  ): number {
    return Math.abs(this._getCoordinate(sphere.center, plane));
  }

  private static _getCoordinate(
    p: { x: number; y: number; z: number },
    plane: CoordinatePlane
  ): number {
    switch (plane) {
      case 'xy':
        return p.z;
      case 'xz':
        return p.y;
      case 'yz':
        return p.x;
    }
  }
}
