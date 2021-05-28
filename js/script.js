'use strict'
const bodyHtml = document.querySelector('body')

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.divOrId = function(){
    let newElem = null;
    if(this.selector.slice(0, 1) === '.') {
        newElem = document.createElement('div');
        newElem.classList.add(this.selector.substring(1));
        newElem.textContent = 'div with class=' + '"' +  this.selector.substring(1) + '"';
    } else if (this.selector.slice(0, 1) === '#') {
        newElem = document.createElement('p');
        newElem.id = this.selector.substring(1);
        newElem.textContent = 'p with id=' + '"' + this.selector.substring(1) + '"';
    };
    newElem.style.cssText = 'height:' + this.height + 
                        '; width:' + this.width + 
                        '; background:' + this.bg + 
                        '; font-size:' + this.fontSize + ';';
    bodyHtml.prepend(newElem);
};

//selector, height, width, bg, fontSize

let domElement = new DomElement('.1111', '30px', '100%', 'red', '20px') 
domElement.divOrId()
git