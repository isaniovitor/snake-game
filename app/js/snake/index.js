import { gameBoard, randomPosition } from "../board/index.js";
import { foodBody, collison as snakeFoodCollision } from "../food/index.js";

export const snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
];

const inputMoviment = {
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

  // verifica colison com a fruta
  if (snakeFoodCollision()) {
    console.log("newPs");
    return;
  }

  // se não comeu fruta: remove a ultima parte
  snakeBody.pop();
}

export function draw() {
  snakeBody.forEach((segment) => {
    // create element
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

export function collision(position) {
  //some: retorna true se ao menos uma for verdadeira
  console.log(snakeBody);
  // return snakeBody.some((segment) => {
  //   return position.x === segment.x && position.y === segment.y;
  // });
}

// ----- EVENTS ----- //
addEventListener("keydown", (e) => {
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
  }
});
