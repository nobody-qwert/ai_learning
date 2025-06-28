// 3D Snake Game Prompt
const snake3DPrompt = {
    id: '3d-snake',
    title: '3D Snake Game',
    icon: '🎮',
    difficulty: 'Hard',
    description: 'A fully 3D snake game implementation using Three.js with two AI-controlled snakes.',
    features: [
        '10x10x10 3D grid playing field',
        'Two AI-controlled snakes with 6-directional movement',
        'Wireframe boundary visualization',
        'Realistic lighting (ambient, directional, point)',
        'Rotating scene for better visibility',
        '3D collision detection system',
        'Real-time scoreboard',
        'Food spawning in 3D space'
    ],
    prompt: `Please generate a complete, self-contained HTML file that implements a 3D Snake Game using Three.js with the following requirements:

1. **Grid and Movement:**
   - Create a 10x10x10 grid where each cell center is defined by the conversion:  
     \`worldCoord = gridCoord - gridSize/2 + 0.5\`  
     (with \`gridSize = 10\`).
   - The snake segments are cubes with a size of 0.9. Two snakes should be implemented, each with its own body (an array of grid coordinates), moving in one of six directions (+x, -x, +y, -y, +z, -z) using simple AI logic.
   - Include collision detection (with boundaries and self/other snake segments) and a mechanism to grow the snake when it eats food.
   - The game should update on a fixed interval (e.g., 150ms).

2. **Playing Field Boundary:**
   - Instead of displaying a dot grid, create a wireframe cube that outlines the outer perimeter of the playing field.
   - Adjust the boundaries of the wireframe so that they account for the snake segment size (0.9) – i.e., the segments (which extend 0.45 units from their centers) must remain completely inside the boundary. Compute the minimum and maximum world coordinates accordingly and create the wireframe cube from those.

3. **Lighting and Scene:**
   - Add realistic lighting: include ambient light, directional light, and a point light to give depth and realism to the scene.
   - The scene should slowly rotate (for example, by continuously updating the scene's rotation in the animation loop).

4. **Food and Scoreboard:**
   - Implement a food spawning system that randomly places food within the grid (ensuring it does not spawn on a snake).
   - Display a scoreboard (using inline CSS) that updates with each snake's score.

The output should be a complete HTML file that, when opened in a browser, displays the 3D snake game with a rotating scene, realistic lighting, a correct wireframe boundary, and functioning game logic.`
};
