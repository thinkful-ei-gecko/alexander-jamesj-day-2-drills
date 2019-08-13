'use strict'

const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// filter
let turtleFiltered = turtleMovement.filter((move) => {
    return move[0] >= 0 && move[1] >= 0;
});

// map
turtleMovement.map((turtle) => {
    return turtle[0] + turtle[1];
});

// forEach
turtleMovement.forEach((turtle) => {
    turtle[0] > 1 ? console.log(`Movement #1: ${turtle[0]} steps`) : console.log(`Movement #1: ${turtle[0]} step`);
    turtle[1] > 1 ? console.log(`Movement #2: ${turtle[1]} steps`) : console.log(`Movement #2: ${turtle[1]} step`);
});