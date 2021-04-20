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
function onImgSelect(id) {
    changeMemeImg(id);
    // resizeCanvas();
    renderMeme()
    toggleGenerator()
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
    console.log(meme);
    drawText()
}

function drawText() {
    const meme = getMemes();
    meme.lines.forEach(line => {
        gCtx.textAlign = `${line.align}`;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillStyle = `${line.color}`;
        gCtx.fillText(`${line.txt}`, line.pos.x, line.pos.y);
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = line.stroke;
        gCtx.strokeText(`${line.txt}`, line.pos.x, line.pos.y);
    })
    // document.querySelector('.text-editor input').value = meme.lines[meme.selectedLineIdx].txt;
}


function toggleGenerator() {
    document.querySelector('.meme-editor').classList.toggle('no-display')
    document.querySelector('.gallery').classList.toggle('no-display')
}