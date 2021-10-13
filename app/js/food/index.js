// import { gameBoard, randomPosition } from "../board/index.js";
import { snakeBody } from "../snake/index.js";
import { gameBoard, randomPosition } from "../board/index.js";

export let foodBody = { x: 5, y: 5 }; //randomPosition();

export function update() {
  if (collison()) foodBody = randomPosition();
}

export function draw() {
  // create element
  const foodElement = document.createElement("div");

  // CSS
  foodElement.classList.add("food");

  // position
  foodElement.style.gridRowStart = foodBody.y;
  foodElement.style.gridColumnStart = foodBody.x;

  // append in DOM
  gameBoard.appendChild(foodElement);
}

export function collison() {
  if (snakeBody[0].x == foodBody.y && snakeBody[0].y == foodBody.x) return true;

  return false;
}
