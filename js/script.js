'use strict'
const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('button')
const h = document.querySelector('h1')


function random (){
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	  }
	  
	  let red = getRandomInt(255);
	  let green = getRandomInt(255);
	  let blue = getRandomInt(255);
	
	function RGBToHex(r,g,b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	
	if (r.length == 1)
		r = "0" + r;
	if (g.length == 1)
		g = "0" + g;
	if (b.length == 1)
		b = "0" + b;
	
	return "#" + r + g + b;
	}
	
	h.textContent = RGBToHex(red, green, blue)
	wrapper.style.backgroundColor = RGBToHex(red, green, blue)
	button.style.color = RGBToHex(red, green, blue)
}


random()
button.addEventListener('click', random)
