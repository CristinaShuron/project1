// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера// Якщо користувач вводить "Admin",
// то prompt запитує пароль.// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"
//Пароль перевіряти так:// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

// const login = prompt("Enter login?");

// if (!login) {
//   console.log("Cancel");
// } else if (login === "Admin") {
//   const password = prompt("Enter password?");
//   if (password === "I am admin") {
//     console.log("Hello!");
//   } else {
//     console.log("Wrong password!");
//   }
// } else {
//   console.log("I dont know you!");
// }
// console.log(login);


// const minutes = 35;
// У змінній minutes лежить число
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const minutes = 48;

// if (minutes < 0 && minutes > 15) {
//     console.log(' Iчверть');
// } else if (minutes >= 15 && minutes <30) {
//     console.log('II чверть');
// } else if (minutes >= 30 && minutes < 45) {
//     console.log(' III чверть');
// } else {
//     console.log('IV чверть');
// } 
// console.log(minutes);

// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: 
//мова та автор// PHP Расмус Лердорф// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум
// const lang = prompt('Введіть мову');

// switch (lang) { 
//     case 'php':
//         console.log('PHP Расмус Лердорф');
//     break;

//     case 'C#':
//         console.log('C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота');
//     break;

//     case 'Swift':
//         console.log('Кріс Латтнер');
//     break;

//     case 'JS':
//         console.log(' Брендан Ейх');
//     break;

//     case 'Java':
//         console.log('Java Джеймс Гослінг');
//     break;

//     case 'Python':
//         console.log(' Python Гвідо ван Россум');
//     break;

//     default:
//         console.log('Не знайдено');
// }

//Напишіть цикл, який виводить у консоль
//1. числа від max до min за спаданням
//2. Виведіть у консоль усіх парні числа від min до max
//3. За допомогою циклу for додайте всі парні числа від min до max
// const max = 90;
// const min = 33;

// for (let i = max; i >= min; i-=1) {
//         console.log(i)
//     }
// let total = 0;

//     for (let i = max; i >= min; i-=1) {
//         if(i % 2 === 0) { 
//         console.log(i)
//         total += i;
//     }
// }
// console.log(total);

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// let userInput = prompt('Num:');

// while (userInput < 100) {
//     if (userInput === null) {
//         console.log('Отмена');
//     break; 
// }
// userInput = prompt('Try again');
// }

// Введіть рядок в prompt
// Виведіть кількість голосних букв в цьому рядку
// const userInput = prompt('Введіть рядок');
// let total = 0;

// for (let i = 0; i <= userInput.length; i +=1) {
//         console.log(userInput[i]);
//         const letter = userInput[i];
//         if (letter === 'a' || letter === 'o' || letter === 'e' || letter === 'i' || letter === 'u') {
//             total +=1;
//         }
// }
//     console.log(total)

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.
// let total = 0;

// do {
//  const userInput = prompt('Enter number');
//  if (userInput === null) {
//     break;
// }
// const number = Number(userInput);
//  if (isNaN(number)) {
//     continue;
//  }
//     total += number;

// } while(true);
// console.log(total);

// Напишіть функцію min(a,b),
// яка повертає найменше з чисел a та b.
// Приклад викликів://// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a, b) {
//     // if (a > b) {
//     //     return b;
//     // } else {
//     //     return a
//     // }
//     return a > b ? b : a;
// }
// console.log(min(1002, 102));

// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

const salary = 1000;
const mounth = 3;
const tax = 0.05;
let purSalary = 0;
let summTax = 0;
for (let i = 0; i < mounth; i += 1) {
    summTax += salary * tax;
    purSalary += salary * 0.95;
}
console.log('Чистий дохід', purSalary);
console.log('Сума податків', summTax);
 
