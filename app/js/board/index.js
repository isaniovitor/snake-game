export const gameBoard = document.getElementById("game_board");

const BOARD_SIZE = 21;

export function randomPosition() {
  return {
    x: Math.round(Math.random() * (BOARD_SIZE - 1) + 1),
    y: Math.round(Math.random() * (BOARD_SIZE - 1) + 1),
  };
}

export function wallCollision(position) {
  if (
    position.x == 0 ||
    position.x > 21 ||
    position.y == 0 ||
    position.y > 21
  ) {
    return true;
  }
  return false;
}
