/**
 * drawBall.js
 *
 * Rendering helper functions.
 * These functions draw objects to the canvas.
 */

/**
 * Draws a ball to the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Ball} ball
 */
export function drawBall(ctx, ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
}
