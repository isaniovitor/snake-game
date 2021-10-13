import { gameBoard, wallCollision } from "../board/index.js";
import { collison as snakeFoodCollision } from "../food/index.js";

export let snakeBody = [{ x: 11, y: 11 }];

let inputMoviment = {
  x: 0,
  y: 0,
};

// ----- FUNCTIONS ----- //
export function update() {
  let x, y;

  // x e y são o valor da cabeça mais o valor teclado
  x = snakeBody[0].x + inputMoviment.x;
  y = snakeBody[0].y + inputMoviment.y;

  // add cabeça
  snakeBody.unshift({ x, y });

  // verifica colison com a fruta, se houver: ele deica de eliminar o ultimo. isso aumentara a cobra
  if (!snakeFoodCollision()) snakeBody.pop();

  // verifica colisão com a parede
  if (wallCollision(snakeBody[0]) || selfCollision()) resetSnake();
}

export function draw() {
  snakeBody.forEach((segment) => {
    // create elements
    const snakeElement = document.createElement("div");

    // CSS
    snakeElement.classList.add("snake");

    // position
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;

    // append in DOM
    gameBoard.appendChild(snakeElement);
  });
}

function selfCollision() {
  // verifica se ha mais de um segmento
  if (snakeBody.length != 1) {
    for (var i = 1; i < snakeBody.length; i++) {
      if (snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y)
        return true;
    }
  }
  return false;
}

function resetSnake() {
  inputMoviment = { x: 0, y: 0 };
  snakeBody[0] = { x: 11, y: 11 };

  // rreseta a cobra ao tamanho normal
  snakeBody.splice(1, snakeBody.length);
}

// ----- EVENTS ----- //
addEventListener("keydown", (e) => {
  //console.log(e);
  switch (e.key) {
    case "ArrowUp":
      inputMoviment.x = -1;
      inputMoviment.y = 0;
      break;
    case "ArrowDown":
      inputMoviment.x = 1;
      inputMoviment.y = 0;
      break;
    case "ArrowLeft":
      inputMoviment.x = 0;
      inputMoviment.y = -1;
      break;
    case "ArrowRight":
      inputMoviment.x = 0;
      inputMoviment.y = 1;
      break;
    default:
      inputMoviment.x = 0;
      inputMoviment.y = 0;
      break;
  }
});
