import { gameBoard } from "./board/index.js";
import { draw as snakeDraw, update as snakeUpdate } from "./snake/index.js";

// const SNAKE_SPEED = 5;
const FPS = 60;
let frame;

// main
function main() {
  // requestAnimationFrame returns a frame;
  frame = requestAnimationFrame(main);

  // 1 sec
  if (frame % FPS == 0) {
    update();
    draw();
  }
}

function update() {
  // clean screen
  gameBoard.innerHTML = "";
  snakeUpdate();
}

function draw() {
  snakeDraw();
}

main();
