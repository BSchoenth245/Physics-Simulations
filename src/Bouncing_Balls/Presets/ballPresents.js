/**
 * ballPresets.js
 *
 * Named presets for commonly used ball configurations.
 * Makes spawning consistent and configurable.
 */

export const BALL_PRESETS = {
  rubber: {
    radius: 10,
    mass: 1,
    restitution: 0.95,
    friction: 0.99,
    color: "red",
  },
  steel: {
    radius: 12,
    mass: 5,
    restitution: 0.4,
    friction: 0.9,
    color: "gray",
  },
};
