let inputDirection = { x: 0, y: 0};
let lastInputDirection = {x: 0, y:0};

//buttons
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

window.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1};
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1};
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y:0};
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y:0};
    }
})

up.onclick =function(){
    if(lastInputDirection.y ==0) inputDirection = {x: 0,y: -1};
}
down.onclick =function(){
    if(lastInputDirection.y ==0) inputDirection = {x: 0,y: 1};
}
left.onclick =function(){
    if(lastInputDirection.x ==0) inputDirection = {x: -1,y: 0};
}
right.onclick =function(){
    if(lastInputDirection.x ==0) inputDirection = {x: 1,y: 0};
}


export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}