const Grid_size = 21;

export function randomGridPosisiton(){
    return{
        x: Math.floor(Math.random() * Grid_size) + 1,
        y: Math.floor(Math.random() *Grid_size) + 1
    }
}

export function outsideGrid(postion){
    return  postion.x < 1 || postion.x > Grid_size ||
            postion.y < 1 || postion.y > Grid_size
    
}