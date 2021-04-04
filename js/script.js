let num = 266219;
let strNum = num.toString().split(''); //преобразование чисел в строку. Строку в масив
console.log(strNum);

let result = strNum.reduce((acc, item) => {
    return acc * +item
  }, 1);
console.log(result);

let pow = result ** 3; // возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
console.log(pow);

pow = pow.toString().substr(0, 2); //Вывести на экран первые 2 цифры полученного числа
console.log(pow);
