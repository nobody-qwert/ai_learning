// 3D Physics Simulation Prompt
const physics3DPrompt = {
    id: '3d-physics',
    title: 'Level 4: 3D Physics Simulation',
    icon: '🎯',
    difficulty: 'Hard',
    description: 'A complex 3D physics simulation with WebGL/Three.js featuring 150 balls in a rotating cube.',
    features: [
        '3D wireframe rotating cube container',
        '150 balls with different masses, sizes, and colors',
        'Realistic collision detection in 3D space',
        'Gravity simulation affecting only the balls',
        'Visual gravity vector indicator',
        'WebGL or physics library implementation',
        'Realistic lighting for depth perception'
    ],
    prompt: `generate a 3D rotating cube. just a wireframe. 
Withing the cube add 150 balls. make sure initially balls are within the cube and they do not intersect each other or the walls!
make the balls diferent mass, sizes and different colors too. 
as the cube rotates make sure you handle collision detection and balls stay withing the cube.
as cube rotates make the balls interact with the walls and each other also, by handling collisions.
add some lighting so the scene feels realistic. 
implement it in a single html. use some webgl or some phisycs library.
add gravity to the scene but make sure it afeccts only the balls, not the cube.
display the gravitation vector as an arrow. make sure gravitational vector always ponts down, and it is not rotated!
when balls move and when box rotates always check that the balls do not leave the box, and they bounce off the wall!!`
};
