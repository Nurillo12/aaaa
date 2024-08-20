// Javascriptda Primitive va Non-Primitive ma'lumot turlari bor.

// Primitive data(ma'lumot) turlari:

//  1) Number
// let num = 23
// console.log(typeof num);

// 2) String
// let str = "Steven"
// console.log(typeof str);

// 3) Boolen
// let isTrue = true
// console.log(typeof isTrue);

// 4) Undefined
// let notDefined;
// console.log(typeof notDefined);

// 5) Null
// let empty = null
// console.log(typeof empty);

// 6) Symbol
// let sym = Symbol()
// console.log(typeof sym);

// 7) BigInt
// let bigInt = 12345678901234567890n;
// console.log(typeof bigInt);

// Primitiv ma'lumot turlari xotiradan o'zgarmas joy egallaydi, quyidagi misolda buni ko'rishimiz mumkin, ya'ni console oynada 2 ta qiymat ko'rinadi. Bizning 1-qiymat o'zgarib ham qolmadi yoki o'chib ham ketmadi.

// let number = 23
// console.log(number); 
// number = 24
// console.log(number);

// let empty = null
// let ab
// console.log(empty == ab);     // result: true  chunki ikkalasida ham qiymat yo'q
// console.log(empty === ab);    // result: false  chunki "null" ni data turi obyekt, ab niki esa "undefined", ya'ni data turi bo'yicha bular 2 xil. 



// let number = [123, 345, 45, 78]
// console.log(number instanceof Array);

// bu degani number Arraydan namuna oldingmi degani, shunda bizga "true" ya'ni to'g'ri degan javobni qaytaryapti console oynada.


let raqam1 = 22
let raqam2 = 22
console.log(raqam1 == raqam2);   // true

let str1 = "Steven"
let str2 = "Steven"
console.log(str1 == str2);     // true

let symbol1 = Symbol(22)
let symbol2 = Symbol(22)
console.log(symbol1 == symbol2);    // false




