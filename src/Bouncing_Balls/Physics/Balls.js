export class Ball {
  constructor({
    x,
    y,
    radius,
    mass,
    restitution,
    friction,
    color,
    vx = 0,
    vy = 0,
  }) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.radius = radius;
    this.mass = mass;
    this.restitution = restitution;
    this.friction = friction;
    this.color = color;
  }
}
