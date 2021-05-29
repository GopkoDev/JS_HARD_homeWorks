'use strict'
const bodyHtml = document.querySelector('body')
let newElem = null,
    elemTop = 100,
    elemLeft = 100;

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.divOrId = function(){
	newElem = document.createElement('div');
	newElem.classList.add(this.selector.substring(1));
	newElem.textContent = 'div with class=' + '"' +  this.selector.substring(1) + '"';
    newElem.style.cssText = 'height:' + this.height + 
                        '; width:' + this.width + 
                        '; background:' + this.bg + 
                        '; font-size:' + this.fontSize + 
						'; position: absolute;' +
                        'top:' + elemTop +
                        'px; left:' + elemLeft +'px;';
    bodyHtml.prepend(newElem);
};



//selector, height, width, bg, fontSize
let domElement = new DomElement('.1111', '110px', '100px', 'black', '10px') 


document.addEventListener('DOMContentLoaded', function (){
	domElement.divOrId()
})


document.addEventListener('keydown', function(event){
    newElem.remove()
	if (event.key === 'ArrowUp') elemTop -= 10
    if (event.key === 'ArrowDown') elemTop += 10
    if (event.key === 'ArrowLeft') elemLeft -= 10
    if (event.key === 'ArrowRight') elemLeft += 10
    domElement.divOrId()
})
