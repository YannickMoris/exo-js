var a = 1;
var b = 5;
var tmp;

console.log(`--------avant inversion --------`);
console.log(`A : ${a}`);
console.log(`B : ${b}`);

tmp = a;
a = b;
b = tmp;

console.log(`---------après inversion----------`);
console.log(`A : ${a}`);
console.log(`B : ${b}`);