'use strict'

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
}

function renderMeme() {
    drawImg()
    drawText('HOLLA!', 255, 100)
    drawText('HOLLA you', 255, 400)
    
}
// function drawImg() {
//     var elImg = 'img/1.jpg'
//     gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
// }

function drawImg() {
    var img = new Image()
    img.src = 'img/1.jpg';
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}