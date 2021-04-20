'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };
var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];
var gMeme = {
	selectedImgId: 5,
	selectedLineIdx: 0,
	lines: [
        {
            txt: 'Top Text',
            size: 40,
            align: 'center',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
            pos:
            {
                x: 400,
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
                x: 400,
                y: 750
            }
        }
    ]
};

function changeMemeImg(id) {
    gMeme.imgId = id;
}
function changeLineTxt(txt) {
	gMeme.lines[0].txt=txt;
}

function getMemes() {
	return gMeme
}

function incFont() {
	gMeme.lines[0].size+=2;
}

function dicresFont() {
	gMeme.lines[0].size-=2;
}


