'use strict'

let input = document.querySelector('input');
let ulCollection = document.querySelectorAll('ul')
let ulItem = document.querySelectorAll('li')
console.log(ulItem)

let buttonAdd = function(){
	let newElem = document.createElement('li');
	newElem.textContent = input.value;
	ulCollection[0].append(newElem)
}