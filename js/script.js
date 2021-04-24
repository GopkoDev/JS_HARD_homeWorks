"use strict";

// HOMEWORK LESSON 9
function updateTime(){
	let date = new Date();
	let d = date;
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long', 
		timezone: 'UTC',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	let formatDate = function(time) {
		let hour = time.substr(38, 2);
		if (hour == 1 || hour == 21) return ' час ' ;
		if (hour == 2 || hour == 3 || hour == 4 || hour == 22 || hour == 23 || hour == 24) return ' часа ';
		return ' часов ';
	};

	d = 'Сегодня ' + d.toLocaleString("ru", options);
	d = d.substr(0, 32) + 'года, ' +d.substr(36, 2) + formatDate(d) + d.substr(39, 2) + ' минут ' + d.substr(42, 2) + ' секунды';

	document.getElementById('date').innerHTML = d;



	let opt = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		timezone: 'UTC',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	date = date.toLocaleString("ru", opt);
	date = date.substr(0, 10) + ' - ' + date.substr(12) ;
	document.getElementById('date2').innerHTML = date;

};

setInterval(updateTime, 1000);