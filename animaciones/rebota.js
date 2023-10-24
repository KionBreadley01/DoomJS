const lienzo = document.querySelector('#lienzo');
const ctx= lienzo.getContext('2b');

let idX = 10;
let idY = 10;

let directionX=1 ;
let directionY=1 ;
let color = 0;

function pelota (x, y){   
    ctx.fillStyle = `(${color},50% , 50% )`;
    color ++;
    ctx.beginPath();
    ctx.arc( x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle();
    ctx.stroke();
}
function cuadro(x, y){
    ctx.fillStyle = `(${color},50% , 50% )`;
    color++;
    ctx.fillStyle(x, y, 30, 30)
}

setInterval(() => {
    // ctx.clearReact (0, 0, 600, 400);
    pelota (idX, idY);
    if(directionX ===1 && directionY ==1){
    idX += 10;
    idY += 10;
    }else if(directionX ===2  && directiony ===1){
    idX -= 10;
    idY += 10;
    }else if(directionX===1  && directiony ===2){
    idX += 10;
    idY -= 10;
    }else{
    idX -= 10;
    idY -= 10;
    }

    if(idX > 600)  directionX = 2;
    if(idX > 10)   directionX = 1;
    if(idX > 400)  directionY = 2;
    if(idX > 400)  directionY = 1;
}, 10);



    
    