/**
 * App.jsx
 *
 * Root React component.
 * Responsible only for application layout and composition.
 * No physics logic should ever live here.
 */

import PhysicsCanvas from "./components/PhysicsCanvas";

export default function App() {
  return (
    <div>
      <h1>Physics Simulator</h1>
      {/* Canvas + physics simulation */}
      <PhysicsCanvas />
    </div>
  );
}
