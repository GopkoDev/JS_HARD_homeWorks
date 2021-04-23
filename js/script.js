"use strict";

// HOMEWORK LESSON 7

let date = new Date;
let week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

for (let i = 0; i < week.length; i++ ) {
  let day = week[i]
  if (i == 5 || i == 6) day = day.italics();
  if (i+1 === date.getDay()) day = day.bold();
  document.write('<div>' + day + '</div>');
};

