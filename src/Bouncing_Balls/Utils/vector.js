/**
 * vector.js
 *
 * Generic vector math utilities.
 * These functions are pure and reusable.
 */

/**
 * Computes the magnitude of a vector.
 */
export function magnitude(x, y) {
  return Math.sqrt(x * x + y * y);
}

/**
 * Normalizes a vector to unit length.
 */
export function normalize(x, y) {
  const mag = magnitude(x, y);
  if (mag === 0) return { x: 0, y: 0 };

  return { x: x / mag, y: y / mag };
}
