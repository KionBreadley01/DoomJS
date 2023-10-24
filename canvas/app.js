const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

function cuadrito(ctx,x,y){
    ctx.fillStyle ='green';
    ctx.strokeRect(x, y, 10, 10);
}
let ejex = 0;
let ejey = 0;
setInterval(() =>{
    cuadrito(ctx, ejex, ejey);
    ejex+= 10;
}, 100);
/*
ctx.beginPath();
ctx.fillStyle ='white';
ctx.arc(200, 200, 200, 0, Math.PI *2);

ctx.fillStyle ='black';
ctx.strokeRect(100, 100, 200, 200); // Cabeza
ctx.strokeRect(150, 150, 20, 20); // Ojo Iz
ctx.fillRect(160, 160, 10, 10);
ctx.strokeRect(230, 150, 20, 20); // Ojo Der
//lentes
ctx.beginPath();
ctx.arc(160, 160,25, 0,Math.PI *2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(240, 160, 25, 0, Math.PI *2, true);
ctx.stroke();
ctx.beginPath();//Line left
ctx.moveTo(100, 160);
ctx.lineTo(135, 160);
ctx.stroke();
ctx.beginPath();//Line Right
ctx.moveTo(265, 160);
ctx.lineTo(300, 160);
ctx.stroke();
ctx.beginPath();//Line center
ctx.moveTo(185, 160);
ctx.lineTo(215, 160);
ctx.stroke();

ctx.fillRect(240, 160, 10, 10);
ctx.strokeRect(190, 180, 20, 50); // Nariz
ctx.strokeRect(150, 250, 100, 20); // Boca

ctx.fillRect(90, 90, 220, 40);
ctx.fillRect(110, 50, 180, 40);

//corbata
ctx.fillStyle ='red';
ctx.beginPath();
ctx.moveTo(200,300);
ctx.lineTo(230,320);3
ctx.lineTo(200,340);
ctx.lineTo(170,320);
ctx.lineTo(200,300);
ctx.fill();
ctx.beginPath();
ctx.moveTo(200,330);
ctx.lineTo(240,350);3
ctx.lineTo(200,400);
ctx.lineTo(160,350);
ctx.fill();
ctx.stroke();
*/


