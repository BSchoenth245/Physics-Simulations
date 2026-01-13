export function handleWallCollisions(ball, canvas) {
  if (ball.y + ball.radius > canvas.height) {
    ball.y = canvas.height - ball.radius;
    ball.vy *= -ball.restitution;
    ball.vx *= ball.friction;
  }

  if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
    ball.vx *= -ball.restitution;
  }
}
