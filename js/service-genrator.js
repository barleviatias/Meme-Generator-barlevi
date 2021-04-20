'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };
var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];
var gMeme = {
	selectedImgId: 1,
	selectedLineIdx: 0,
	lines: [
        {
            txt: 'Top Text',
            size: 100,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
            pos:
            {
                x: 255,
                y: 100
            }
        },

        {
            txt: 'Bottom Text',
            size: 100,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
            pos:
            {
                x: 255,
                y: 550
            }
        }
    ]
};

function changeMemeImg(id) {
    gMeme.selectedImgId = id;
}
function changeLineTxt(txt) {
	gMeme.lines[gMeme.selectedLineIdx].txt=txt;
}

function getMemes() {
	return gMeme
}
function changeFontSize(val) {
    gMeme.lines[gMeme.selectedLineIdx].size += val;
}
function moveLine(val) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += val;
}
function changeLine() {
	gMeme.selectedLineIdx++;
	if (gMeme.selectedLineIdx===gMeme.lines.length)gMeme.selectedLineIdx=0;
}

function createLine() {
    const line = {
        txt: 'New Text',
        size: 100,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        pos:
        {
            x: 400,
            y: 400
        }
    }
    return line;
}

