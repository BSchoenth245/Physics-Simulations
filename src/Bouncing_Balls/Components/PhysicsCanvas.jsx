/**
 * PhysicsCanvas.jsx
 *
 * React component that hosts the canvas element.
 * This file coordinates:
 *  - user input
 *  - physics updates
 *  - rendering
 *
 * IMPORTANT:
 * React state is NOT used for physics objects.
 * We use refs to avoid re-rendering on every frame.
 */

import { useRef, useEffect } from "react";
import { updatePhysics } from "../Physics/updatePhysics";
import { drawBall } from "../Render/drawBall";
import { Ball } from "../Physics/Ball";
import { BALL_PRESETS } from "../Presets/ballPresents";

export default function PhysicsCanvas() {
  /**
   * Reference to the canvas DOM element.
   * This never causes a React re-render.
   */
  const canvasRef = useRef(null);

  /**
   * Mutable list of all physics bodies in the simulation.
   * Stored in a ref so it can be updated every frame
   * without triggering React updates.
   */
  const ballsRef = useRef([]);

  /**
   * Handles mouse clicks on the canvas.
   * Spawns a new Ball at the mouse position.
   */
  function handleClick(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Convert mouse coordinates from screen space to canvas space
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Create a new physics body using a predefined preset
    ballsRef.current.push(
      new Ball({
        x,
        y,
        ...BALL_PRESETS.rubber,
        vx: Math.random() * 4 - 2, // random horizontal impulse
        vy: -6, // upward impulse
      })
    );
  }

  /**
   * Main animation loop.
   * Runs once on mount and schedules itself using requestAnimationFrame.
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function animate() {
      // Clear the entire canvas before redrawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update physics and render each ball
      ballsRef.current.forEach(ball => {
        updatePhysics(ball, canvas);
        drawBall(ctx, ball);
      });

      // Schedule the next frame
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onClick={handleClick}
    />
  );
}
