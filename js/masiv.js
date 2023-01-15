const clients = ["Polly", "Mango", "Ajax"];// masuv
console.log(clients.length);//3 довжина_масиву


const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;//формулу довжина_масиву - 1,значення останнього елемента масиву
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"


const clients = ["Mango", "Ajax", "Poly"];
for (let i=0; i<clients.lenght; i +=1) {
    console.log(clients[i]);
}

const clients = ["Mango", "Ajax", "Poly"];
for (const client of clients) {
    console.log(client);
  }

const string = "javascript";
for (const character of string) {
  console.log(character);
}

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;
for (const client of clients) {
    if (client === clientNameToFind){
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
}
    message = "Клієнт з таким ім'ям відсутній в базі даних!";
}
console.log(message);

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клієнт з таким ім'ям відсутній в базі даних!";
for (client of clients) {
    if (clientv === clientNameToFind);
    message = "Клієнт з таким ім'ям  є  в базі даних!";
    break;
}
console.log(message);