/**
 * drawBall.js
 *
 * Rendering helper functions.
 * These functions draw objects to the canvas.
 */

/**
 * Draws a ball to the canvas.
 * If the ball has an image, it draws the sprite on top.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Ball} ball
 */
export function drawBall(ctx, ball) {
  // Draw the ball circle
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();

  // Draw sprite on top if available and loaded successfully
  if (ball.image && ball.image.complete && ball.image.naturalWidth > 0) {
    const size = ball.radius * 2;
    ctx.drawImage(
      ball.image,
      ball.x - ball.radius,
      ball.y - ball.radius,
      size,
      size
    );
  }
}
