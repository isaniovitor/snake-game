import { gameBoard } from "./board/index.js";
import { draw as snakeDraw, update as snakeUpdate } from "./snake/index.js";
import { draw as foodDraw, update as foodUpdate } from "./food/index.js";

// const SNAKE_SPEED = 5;
const FPS = 5;
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
  foodUpdate();
}

function draw() {
  snakeDraw();
  foodDraw();
}

main();
