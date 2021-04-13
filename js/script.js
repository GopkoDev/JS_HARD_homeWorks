"use strict";

// HOMEWORK LESSON 5
// 5.1
let arr = ['478544', '25622', '766523', '25896', '45544', '96325', '785320'];
let str;

for (let i = 0; i < arr.length; i++) {
  str = arr[i];
  if (str.substr(0, 1) === '2' || str.substr(0, 1) === '4' ) console.log(arr[i])
}; 


// 5.2
nextPrime:
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if(i % j == 0) continue nextPrime
  };  
  console.log(i + ' Делители этого числа 1 и ' + i )
};
