'use strict'

var gCanvas;
var gCtx;
var gImg ;

function init() {
    renderGallery()
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
    gImg = new Image()
    drawImg()
}
function renderGallery() {
    const gallery = getGGallery();
    var htmlStr = gallery.map(img => {
        return `<div onclick="onImgSelect(${img.id})" class="gallery-img"><img src="img/${img.id}.jpg"></div>`
    })
    document.querySelector('.gallery').innerHTML = htmlStr.join('');
}
function renderMeme() {
    var memes=getMemes();
    console.log(memes);
    drawImg()
    txtEdit(memes)
    // clearCanvas()
    
}
function drawImg() {
    // var memes=getMemes();
    gImg.src = 'img/1.jpg';
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
        // drawText(memes.lines[0].txt, 255, 100)
    
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}
function txtEdit(txt) {
    var meme=getMemes();
    console.log(memes);
    drawText(txt, 255, 100,meme)
}

function drawText(text, x, y,meme) {
    console.log(meme.lines[0].size);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.font = meme.lines[0].size
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


