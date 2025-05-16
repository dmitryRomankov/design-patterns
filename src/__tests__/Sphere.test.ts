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

  it('should return 1 for cut exactly at center (z=0)', () => {
    const sphere = new Sphere('S1', new Point(0, 0, 0), 3);
    const ratio = SphereService.getVolumeRatioAfterCut(sphere, 'xy');
    expect(ratio).toBeCloseTo(1.0);
  });

  it('should return ratio < 1 when cut offset upward (z=1)', () => {
    const sphere = new Sphere('S2', new Point(0, 0, 1), 3);
    const ratio = SphereService.getVolumeRatioAfterCut(sphere, 'xy');
    expect(ratio).toBeLessThan(1.0);
  });

  it('should return 0 if sphere does not intersect plane', () => {
    const sphere = new Sphere('S3', new Point(0, 0, 5), 1);
    const ratio = SphereService.getVolumeRatioAfterCut(sphere, 'xy');
    expect(ratio).toBe(0);
  });

  it('should compute correct volume ratio for cut at z = -2', () => {
    const sphere = new Sphere('S4', new Point(0, 0, -2), 3);
    const ratio = SphereService.getVolumeRatioAfterCut(sphere, 'xy');
    expect(ratio).toBeGreaterThan(0);
    expect(ratio).toBeLessThan(1);
  });
});
