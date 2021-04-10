/* let num = 266219;
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
 */



// HOMEWOR LESSON 3

let lang = 'ru';  // 'ru' || 'en'

let arr = [
  arrDaysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  arrDaysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
];

// #1
// #1.1
if (lang === 'ru'){
  console.log(arr[0]);
} else if (lang === 'en') {
  console.log(arr[1]);
};


// #1.2
switch (lang) {
  case 'ru':
    console.log(arr[0]);
    break;
  case 'en':
    console.log(arr[1]);
    break;
};


// #1.3
let arrResult = lang === 'ru' ? arr[0] : arr[1];
console.log(arrResult);


// #2
let namePerson = 'Артем' ; // 'Артем', 'Максим' or other value 
let nameResult = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(nameResult)

// HOMEWORK LESSON 4
console.log('LESSON 4');

let streetName = prompt('Введите название улицы');

function kyiv(street){
  if(!isNaN(street)) return(street + ' - не является улицей.Пожалуйста введите название улицы');
  street = street.replace(/\s+/g, '');
  if(street.length >= 30) return street.substr(0, 30) + '...';
  return street;
};

console.log(kyiv(streetName));
