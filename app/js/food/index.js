import { gameBoard, randomPosition } from "../board/index.js";
import { snakeBody, collision as snakeCollision } from "../snake/index.js";

export let foodBody = randomPosition();

export function update() {
  if (collison()) {
    foodBody = randomPosition();
  }
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
  //let newPosition = randomPosition();
//   console.log(snakeBody[0].x + "/" + snakeBody[0].y);
//   console.log(foodBody.x + "/" + foodBody.y);

  if (snakeBody[0].x == foodBody.y && snakeBody[0].y == foodBody.x) {
    return true;
  }

  return false;
}
