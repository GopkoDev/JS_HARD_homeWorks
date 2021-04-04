let num = 266219;
let strNum = num.toString().split(''); //преобразование чисел в строку. Строку в масив

console.log(strNum);

let i = strNum.reduce((acc, item) => {
    return acc * +item
  }, 1);

console.log(i);
