import { Sphere } from '../entities/Sphere';
import { Point } from '../entities/Point';
import { SphereService } from '../services/SphereService';

describe('SphereService', () => {
  const sphere = new Sphere('S1', new Point(0, 0, 0), 3);

  it('should calculate surface area correctly', () => {
    const surface = SphereService.getSurfaceArea(sphere);
    expect(surface).toBeCloseTo(4 * Math.PI * 9);
  });

  it('should calculate volume correctly', () => {
    const volume = SphereService.getVolume(sphere);
    expect(volume).toBeCloseTo((4 / 3) * Math.PI * 27);
  });

  it('should detect intersection with XY plane at center', () => {
    const intersects = SphereService.intersectsPlane(sphere, 'xy');
    expect(intersects).toBe(true);
  });

  it('should not intersect XZ plane (moved up)', () => {
    const movedSphere = new Sphere('S2', new Point(0, 10, 0), 1);
    const intersects = SphereService.intersectsPlane(movedSphere, 'xz');
    expect(intersects).toBe(false);
  });
});
