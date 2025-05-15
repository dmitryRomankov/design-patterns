import { WHITE_SPACE } from '../utils/constants';

export class InputValidator {
  static isValidRectangleData(data: string): boolean {
    const parts = data.trim().split(WHITE_SPACE);
    if (parts.length !== 4) return false;

    const numbers = parts.map(Number);
    return numbers.every((n) => !isNaN(n));
  }

  static isValidSphereData(data: string): boolean {
    const parts = data.trim().split(WHITE_SPACE);
    if (parts.length !== 4) return false;

    const [x, y, z, r] = parts.map(Number);
    return ![x, y, z, r].some(isNaN) && r >= 0;
  }
}
