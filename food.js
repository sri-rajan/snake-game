import { onSnake, expandSnake} from "./snake.js";
import { randomGridPosisiton } from "./grid.js";

let food = getRandomFoodPosition();
let Expansion_rate = 1;
const scoredisplay = document.getElementById("score");
let score = 0;

export function update(){
    if (onSnake(food)){
        expandSnake(Expansion_rate);
        score += Expansion_rate;
        scoredisplay.innerHTML = score;
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard){
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosisiton();
    }
    return newFoodPosition;
}