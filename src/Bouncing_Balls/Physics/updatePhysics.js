import { GRAVITY } from "./constants";
import { handleWallCollisions } from "./collision";

export function updatePhysics(ball, canvas) {
  ball.vy += GRAVITY;

  ball.x += ball.vx;
  ball.y += ball.vy;

  handleWallCollisions(ball, canvas);
}
