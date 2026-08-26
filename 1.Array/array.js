// An array is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.


// example of array:-

let fruits = ["apple", "banana", "mango", "guava"];

console.log("This is fruits array:", fruits);
console.log("favorite fruits:", fruits[0]); // access by index number
console.log("last fruits:", fruits.length - 1); // access last fruits by index number


// 1. push:-

let number = [1, 2, 3, 4, 5];

console.log("add last element in array:", number.push(6));
console.log(number);

// 2.pop:-

let num = [10, 20, 30, 40, 50];

console.log("Remove last element in arry:", num.pop());
console.log(num);

// 3.Unshift:-

let numbers = [1, 2, 3, 4, 5];

console.log("add fist element in array:", numbers.unshift(0));
console.log(numbers);

// 4.shift:-

let nums = [1, 2, 3, 4, 5];

console.log("add last element in array:", nums.shift());
console.log(nums);

// 5. splice:-

let a = [11, 12, 13, 14, 15, 16, 17, 18];

console.log("before a:", a);
a.splice(2, 4);
console.log("after a:", a);

// 6.slice:-

let b = [11, 12, 13, 14, 15, 16, 17, 18];

console.log("before b:", b);
b.slice(2, 3);
console.log("after b:", b);

// 7.concat:-

let A = [1, 2, 3];
let B = [4, 5, 6];

let c = A.concat(B);

console.log("This is concat method", c);

// 8.tostring:-

let x = ["apple", "banana", "mango", "guava"];

let X = x.toString();

console.log("This is tostring method", X);

// 9.join:-

let y = ["apple", "banana", "mango", "guava"];

console.log("after y:", y.join());

// 10.flat:-

let Y = [[1, 2, 3],
[4, 5, [6]]];

console.log("This is flat method:", Y.flat(Infinity));

// 11.some:-

let z = [10, 20, 30, 40, 50];

console.log("This is some method:", z.some(z => z > 60));

// 12.include:-

let Z = [1, 2, 3, 4, 5];

console.log("This is include method:", Z.includes(5));

// 13.indexof;-

let d = [11, 12, 13, 14, 15, 16];

console.log("This is indexof method:", d.indexOf(14));

// 14.find:-

let D = [1, 2, 3, 4, 5, 6, 7, 8];

let e = D.find(D => D > 7);

console.log("This is find method:", e);

// 15.length:-

let E = [1, 2, 3, 4, 5];

console.log("This is length method:", E.length);

// 16.reverse:-

let F = [10, 20, 30, 40, 50];

console.log("This is reverse method:", F.reverse());

// 17.values:-

let G = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numvalue = G.values();

for (let values of numvalue) {
    console.log("values:", values);
}

// 18.every:-

let H = [11, 12, 13, 14, 15];

let h = H.every(h => h > 10);

console.log("This is every method:", h);

// 19.findIndex:-

let I = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = I.findIndex(k => k > 3);

console.log("This is find index method:", i);

// 20.for of:-

let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurgaon"];

for (let city of cities) {
    console.log("This is citi:", city);
}

// 21. map-----------------------------method :-


let arr = [20, 22, 24, 28];

let result = arr.map(a => a * 2);

console.log("This is map method :", result);



const S = ["apple", "banana", "mango"];

let r = S.map(fruit => fruit.toUpperCase());

console.log("This is map method :", r);


// 22. filter------------------- method :-

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

let res = n.filter(num => num > 8);

console.log("This is filter method :", res);


let g = [
    { name: "anit", age: "20" },
    { name: "rahul", age: "23" },
    { name: "kalpesh", age: "22" },
];

let j = g.filter(x => x.age >= 22);

console.log("This is filter method :", j);


// 23. reduce---------------------------method :-

let K = [1, 2, 3, 4, 5, 6];

let values = K.reduce((total, num) => {
    return total + num;
}, 0);

console.log("This is reduce method:", values);


const due = [
    { id: "1", name: "ankit" },
    { id: "2", name: "rahul" },
    { id: "3", name: "ketan" },
];

const value = due.reduce((acc, cur) => {
    return cur.id;
}, 0);

console.log("This is reduce method:", value);


// distructure :-

const table = ["ankit","kalpesh","amit"];

const [first,second,third] = table;

console.log(first);
console.log(second);
console.log(third);
