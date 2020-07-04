// 1.

const a1 = 10;
const b1 = 3;

const res1 = a1 % b1;

console.log(`1. a - b: ${res1}`);

// 2.

const a2 = 12;
const b2 = 5;

if (a2 % b2 === 0) {
  console.log('2. Делится');
} else {
  console.log(`2. Делится с остатком, ${a2 % b2}`);
}

// 3.

const st = Math.pow(2, 10);

console.log(`3. ${st}`);

// 4.

console.log(`4. sqrt: ${Math.sqrt(245)}`);

// 5.

const arr5 = [4, 2, 5, 19, 13, 0, 10];
let res5 = 0;

for (let i = 0; i < arr5.length; i++) {
  res5 += Math.pow(arr5[i], 3);
}

res5 = Math.sqrt(res5);

console.log(`5. ${res5}`);

// 6.

console.log(`6.1 ${Math.round(Math.sqrt(379))}`);
console.log(`6.2 ${Math.round(Math.sqrt(379) * 10) / 10}`);
console.log(`6.3 ${Math.round(Math.sqrt(379) * 100) / 100}`);

// 7.

function Number7obj (value) {
  this.number = Math.sqrt(value);
  this.floor = Math.floor(this.number);
  this.ceil = Math.ceil(this.number);
}

const number7 = new Number7obj(587);

console.log(`7.1 floor = ${number7.floor}`);
console.log(`7.2 ceil = ${number7.ceil}`);

// 8.

console.log(`8.1 min = ${Math.min(4, -2, 5, 19, -130, 0, 10)}`);
console.log(`8.2 max = ${Math.max(4, -2, 5, 19, -130, 0, 10)}`);

// 9.

console.log(`9. Random: ${Math.ceil(Math.random() * 100)}`);

// 10.

let arr10 = [];

for (let i = 0; i < 10; i++) {
  arr10[i] = Math.ceil(Math.random() * 100);
}

console.log(`10. ${arr10}`);

// 11.

const a11 = 13;
const b11 = 27;

console.log(`11. |a - b|: ${Math.abs(a11 - b11)}`);

// 12.

let a12 = 3;
let b12 = 5;
let c = Math.abs(a12 - b12);

console.log(`12.1. |3 - 5|: ${c}`);

a12 = 6;
b12 = 1;
c = Math.abs(a12 - b12);

console.log(`12.2. |6 - 1|: ${c}`);

// 13.

const arr13 = [12, 15, 20, 25, 59, 79];

let sum = 0;

for (let i = 0; i < arr13.length; i++) {
  sum += arr13[i];
}

let average = sum / arr13.length;

console.log(`13. average: ${average}`);

// 14.

const factNumber = 7;

let factorial = 1;

if (factNumber === 1 || factNumber === 0) {
  console.log(`14. !${factNumber} = ${factorial}`);
} else if (factNumber >= 2) {
  for (let i = 2; i <= factNumber; i++) {
    factorial *= i;
  }
  console.log(`14. !${factNumber} = ${factorial}`);
} else {
  console.log(`14. Wrong number!`);
}

