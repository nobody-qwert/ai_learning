// 3D Maze Game Prompt
const maze3DPrompt = {
    id: '3d-maze',
    title: '3D Maze Game with Soldier',
    icon: '🪖',
    difficulty: 'Expert',
    description: 'A sophisticated 3D game featuring procedural maze generation and animated character movement.',
    features: [
        'Procedurally generated 16x16 maze',
        'GLTF soldier model with animations',
        'Smooth character movement with WASD controls',
        'Idle and run animation states',
        'Collision detection with maze walls',
        'Orbit camera controls following the player',
        'Procedural textures for floor and walls',
        'Real-time debug overlay',
        'Responsive design with window resizing'
    ],
    prompt: `**Prompt: Build a 3D Maze Game Demo with a Soldier Character**

Develop a web-based 3D game demo that features a procedurally generated maze and a soldier character with smooth movement and proper orientation. Follow these specifications:

- **Libraries & Dependencies:**
  - **Three.js (r128):** Use Three.js (version r128) via a CDN, for example, [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js).
  - **GLTFLoader:** Load the 3D soldier model using GLTFLoader from [jsDelivr](https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js).
  - **OrbitControls:** Implement camera control with OrbitControls from [jsDelivr](https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js).

- **Scene Setup:**
  - Create a Three.js scene with a perspective camera.
  - Set up a WebGL renderer to cover the entire browser window.
  - Include lighting (e.g., HemisphereLight and DirectionalLight) to properly illuminate the scene.
  - Add a debug overlay (an HTML element) that shows real-time data like the soldier's position and rotation.

- **Maze Generation:**
  - Build a 16×16 grid maze with each cell sized 4 units.
  - Always mark the outer boundary cells as walls.
  - Reserve a central open area (for example, cells 6–9 on both axes) without walls.
  - Randomly place walls in the remaining cells with a 15% chance.
  - Create procedural textures using canvas:
    - **Floor Texture:** A texture with a brown tone and grid lines.
    - **Wall Texture:** A texture with a base color and randomized patterns.

- **Wall & Collision Setup:**
  - For each wall cell, create a box geometry mesh sized to match the cell dimensions and add it to the scene.
  - Compute bounding boxes for each wall to facilitate collision detection.
  - Implement collision detection by checking if the soldier's position (using a collision radius) intersects any wall's bounding box.

- **Soldier Character & Animations:**
  - Load the soldier model from [https://threejs.org/examples/models/gltf/Soldier.glb](https://threejs.org/examples/models/gltf/Soldier.glb) using GLTFLoader.
  - Scale and position the soldier within the open area of the maze.
  - Set up an AnimationMixer for the soldier with at least two actions:
    - **Idle Animation:** Plays when no movement keys are pressed.
    - **Run Animation:** Activates when the soldier is moving.
  - Smoothly transition between animations using fade-in and fade-out techniques.

- **Movement & Controls:**
  - Implement WASD keyboard controls for moving the soldier.
  - Calculate movement direction using the camera's forward (XZ-plane) and left vectors.
  - **Rotation Fix:** To ensure the soldier faces the direction of movement, compute the angle with:
    \`\`\`js
    const angle = Math.atan2(moveDirection.x, moveDirection.z);
    soldier.rotation.y = angle + Math.PI;
    \`\`\`
    This adjustment (adding π) is crucial for the correct orientation of the character.
  - Update the OrbitControls target to follow the soldier, keeping the character centered on screen.

- **Responsive Design:**
  - Handle window resize events to update the camera's aspect ratio and the renderer's size.

- **Animation Loop:**
  - Create a main animation loop that:
    - Updates the AnimationMixer.
    - Processes soldier movement and collision detection.
    - Updates the debug overlay.
    - Renders the scene continuously.

Give mw whole HTML file!`
};
