
----------------------

PROMPT - Level 1 - One Ball 
"make an html for a bounccing red ball within a triangle
make sure to handle collision detection properly. 
make the triangle slowly rotate. 
make sure ball stays within the triangle.
implement it in a single html file. "

------------------

PROMPT - Level 2&3 - Allow user to diturb scebe (Robustness check)

"make an html for 10 bounccing red balls within a triangle
make sure to handle collision detection properly betweend balls and also between walls of the triangle. 
make the triangle slowly rotate. 
allow user to move and shake the triangle with the mouse while it rotates.
make sure ball stays within the triangle.
implement it in a single html file. "

-------------------------------------

PROMPT - Level 4 - 3D scene (This fails for all models)

"generate a 3D rotating cube. just a wireframe. 
Withing the cube add 150 balls. make sure initially balls are within the cube and they do not intersect each other or the walls!
make the balls diferent mass, sizes and different colors too. 
as the cube rotates make sure you handle collision detection and balls stay withing the cube.
as cube rotates make the balls interact with the walls and each other also, by handling collisions.
add some lighting so the scene feels realistic. 
implement it in a single html. use some webgl or some phisycs library.
add gravity to the scene but make sure it afeccts only the balls, not the cube.
display the gravitation vector as an arrow. make sure gravitational vector always ponts down, and it is not rotated!
when balls move and when box rotates always check that the balls do not leave the box, and they bounce off the wall!!"

SNAKE GAMES
---------------------------------------

PROMPT - simple snake
Generate siple snake game.

----------------------------
PROMPT - compete
Generate snake game where 2 snakes are competing.

---------------------------------------
PROMPT - 3D Snake
Please generate a complete, self-contained HTML file that implements a 3D Snake Game using Three.js with the following requirements:

1. **Grid and Movement:**
   - Create a 10x10x10 grid where each cell center is defined by the conversion:  
     `worldCoord = gridCoord - gridSize/2 + 0.5`  
     (with `gridSize = 10`).
   - The snake segments are cubes with a size of 0.9. Two snakes should be implemented, each with its own body (an array of grid coordinates), moving in one of six directions (+x, -x, +y, -y, +z, -z) using simple AI logic.
   - Include collision detection (with boundaries and self/other snake segments) and a mechanism to grow the snake when it eats food.
   - The game should update on a fixed interval (e.g., 150ms).

2. **Playing Field Boundary:**
   - Instead of displaying a dot grid, create a wireframe cube that outlines the outer perimeter of the playing field.
   - Adjust the boundaries of the wireframe so that they account for the snake segment size (0.9) – i.e., the segments (which extend 0.45 units from their centers) must remain completely inside the boundary. Compute the minimum and maximum world coordinates accordingly and create the wireframe cube from those.

3. **Lighting and Scene:**
   - Add realistic lighting: include ambient light, directional light, and a point light to give depth and realism to the scene.
   - The scene should slowly rotate (for example, by continuously updating the scene’s rotation in the animation loop).

4. **Food and Scoreboard:**
   - Implement a food spawning system that randomly places food within the grid (ensuring it does not spawn on a snake).
   - Display a scoreboard (using inline CSS) that updates with each snake's score.

The output should be a complete HTML file that, when opened in a browser, displays the 3D snake game with a rotating scene, realistic lighting, a correct wireframe boundary, and functioning game logic.


---------------------------------------

**Prompt: Build a 3D Maze Game Demo with a Soldier Character**

Develop a web-based 3D game demo that features a procedurally generated maze and a soldier character with smooth movement and proper orientation. Follow these specifications:

- **Libraries & Dependencies:**
  - **Three.js (r128):** Use Three.js (version r128) via a CDN, for example, [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js).
  - **GLTFLoader:** Load the 3D soldier model using GLTFLoader from [jsDelivr](https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js).
  - **OrbitControls:** Implement camera control with OrbitControls from [jsDelivr](https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js).

- **Scene Setup:**
  - Create a Three.js scene with a perspective camera.
  - Set up a WebGL renderer to cover the entire browser window.
  - Include lighting (e.g., HemisphereLight and DirectionalLight) to properly illuminate the scene.
  - Add a debug overlay (an HTML element) that shows real-time data like the soldier’s position and rotation.

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
  - Implement collision detection by checking if the soldier’s position (using a collision radius) intersects any wall’s bounding box.

- **Soldier Character & Animations:**
  - Load the soldier model from [https://threejs.org/examples/models/gltf/Soldier.glb](https://threejs.org/examples/models/gltf/Soldier.glb) using GLTFLoader.
  - Scale and position the soldier within the open area of the maze.
  - Set up an AnimationMixer for the soldier with at least two actions:
    - **Idle Animation:** Plays when no movement keys are pressed.
    - **Run Animation:** Activates when the soldier is moving.
  - Smoothly transition between animations using fade-in and fade-out techniques.

- **Movement & Controls:**
  - Implement WASD keyboard controls for moving the soldier.
  - Calculate movement direction using the camera’s forward (XZ-plane) and left vectors.
  - **Rotation Fix:** To ensure the soldier faces the direction of movement, compute the angle with:
    ```js
    const angle = Math.atan2(moveDirection.x, moveDirection.z);
    soldier.rotation.y = angle + Math.PI;
    ```
    This adjustment (adding π) is crucial for the correct orientation of the character.
  - Update the OrbitControls target to follow the soldier, keeping the character centered on screen.

- **Responsive Design:**
  - Handle window resize events to update the camera’s aspect ratio and the renderer’s size.

- **Animation Loop:**
  - Create a main animation loop that:
    - Updates the AnimationMixer.
    - Processes soldier movement and collision detection.
    - Updates the debug overlay.
    - Renders the scene continuously.

Give mw whole HTML file!