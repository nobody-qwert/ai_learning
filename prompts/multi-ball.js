// Multi-Ball Interactive Scene Prompt
const multiBallPrompt = {
    id: 'multi-ball',
    title: 'Level 2&3: Interactive Multi-Ball Scene',
    icon: '🔴',
    difficulty: 'Medium',
    description: 'An advanced physics simulation with multiple balls and user interaction capabilities.',
    features: [
        '10 bouncing red balls with ball-to-ball collision',
        'Collision detection between balls and triangle walls',
        'Mouse interaction - drag and shake the triangle',
        'Continuous rotation while maintaining physics',
        'Robust collision handling under user disturbance'
    ],
    prompt: `make an html for 10 bounccing red balls within a triangle
make sure to handle collision detection properly betweend balls and also between walls of the triangle. 
make the triangle slowly rotate. 
allow user to move and shake the triangle with the mouse while it rotates.
make sure ball stays within the triangle.
implement it in a single html file.`
};
