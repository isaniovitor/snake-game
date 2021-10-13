import { snakeBody } from "../snake/index.js";

export const gameBoard = document.getElementById("game_board");
const BOARD_SIZE = 21;

export function randomPosition() {
  let closeSegment = false;
  let new_x, new_y;

  while (closeSegment == false) {
    new_x = Math.round(Math.random() * (BOARD_SIZE - 1) + 1);
    new_y = Math.round(Math.random() * (BOARD_SIZE - 1) + 1);

    snakeBody.forEach((segment) => {
      if (segment.x == new_y && segment.y == new_x) closeSegment = true;
    });

    if (closeSegment) closeSegment = false;
    else return { x: new_x, y: new_y };
  }
}

export function wallCollision(position) {
  if (position.x == 0 || position.x > 21 || position.y == 0 || position.y > 21)
    return true;

  return false;
}
