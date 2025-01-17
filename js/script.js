let canvas;
let ctx; 
let character = new Image();

function init(){
    canvas =document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    character.src = './assets/1.Sharkie/3.Swim/1.png';
    ctx.drawImage(character, 30, 30, 50, 50);

}