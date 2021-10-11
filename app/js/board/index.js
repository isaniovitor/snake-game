export const gameBoard = document.getElementById("game_board");

const BOARD_SIZE = 21;

export function randomPosition() {
  return {
    x: Math.round(Math.random() * (21 - 1) + 1),
    y: Math.round(Math.random() * (21 - 1) + 1),
  };
}
