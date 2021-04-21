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
    resizeCanvas();
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
    const meme = getMemes();
    gImg.src = `img/${meme.selectedImgId}.jpg`;
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
        // drawText(memes.lines[0].txt, 255, 100)
    
}
function txtEdit(txt) {
    var meme=getMemes();
    console.log(meme);
    drawText()
}
function onChangeFontSize(val) {
    changeFontSize(val);
    console.log('font change');
    renderMeme();
}
function drawText() {
    const meme = getMemes();
    const x = gCanvas.width / 2;
    meme.lines.forEach(line => {
        gCtx.textAlign = `${line.align}`;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillStyle = `${line.color}`;
        gCtx.fillText(`${line.txt}`, x, line.pos.y);
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = line.stroke;
        gCtx.strokeText(`${line.txt}`, x, line.pos.y);
    })
    document.querySelector('.control-panel input').value = meme.lines[meme.selectedLineIdx].txt;
}


function toggleGenerator() {
    document.querySelector('.meme-editor').classList.toggle('no-display')
    document.querySelector('.gallery').classList.toggle('no-display')
}
function resizeCanvas() {
    document.querySelector('#my-canvas').style.width = '100%'
    document.querySelector('#my-canvas').style.height = '100%'
}
function onChangeLineTxt(txt) {
    changeLineTxt(txt)
	renderMeme();
}
function onMoveLine(val) {
    moveLine(val);
    renderMeme();
}
function onChangeFont(val) {
    changeFont(val)
    drawImg();
}

function onOpenStrokeColor() {
    document.querySelector('input[name=stroke-color]').click();
}

function onChangeStrokeColor(val) {
    changeStrokeColor(val);
    drawImg();
}

function onOpenFontColor() {
    document.querySelector('input[name=font-color]').click();
}

function onChangeFontColor(val) {
    changeFontColor(val);
    renderMeme();
}
function onChangeStrokeColor(val) {
    changeStrokeColor(val);
    renderMeme();
}
function onChangeLine() {
    const meme = getMemes();
    changeLine()
    renderMeme();
    document.querySelector('.control-panel input').value = meme.lines[meme.selectedLineIdx].txt;
    document.querySelector('.control-panel input').focus();

}
function onDeleteLine() {
    deleteLine()
    renderMeme();
}
function onAddLine() {
   addLine()
    renderMeme();
}
function onDownloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}