// -------------------------- Home work --------------------------
// -------------------------- Тарадай Дмитрий --------------------------

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

let str = 'I am in the easycode';
str2 = '';
for (let i = 0; i < str.length; i++) {
	str2 += (str[i - 1] == ' ') ? str[i].toUpperCase() : str[i];
}

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
// (то есть последняя буква становится первой, предпоследняя - второй итд).

str = 'tseb eht ma i';
str2 = '';
for (let i = str.length - 1; i >= 0; i--) {
str2 += str[i];
}


// 3.	Факториал числа - произведение всех натуральных чисел от 1 до n	включительно: 
// 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.	Использовать for.

let a = 1;
let factorial10 = 1;
for (a; a <= 10; a++) {
	factorial10 *= a;
}
console.log(factorial10);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

str = 'JavaScript is a pretty good language';
str2 = '';
str3 = '';
for (let i = 0; i < str.length; i++) {
	str2 += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
}
for (let i = 0; i < str2.length; i++) {
	str3 += (str2[i] === ' ') ? '' : str2[i];
}
console.log(str3);

// 5.	Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
// 	Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let number of array) {
	if (number % 2 === 1) {
	console.log(number)
 	}
}

// 6. Дан объект:
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. 
// Использовать for in.

let list = {
	name: 'denis',
	work: 'easycode',
	age: 0
};
newList = [];
for(let key in list){
	if(typeof list[key] == 'string') {
		newList.push(list[key].toUpperCase());
	} else {
		newList.push(list[key]);
	}
}
console.log(newList);