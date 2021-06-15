let a = 5;
let b = new Number(1);
let c = 10.52;
let d = "55.5";

console.log(a, b);
console.log(c);
console.log(c.toFixed(1));
console.log(c.toFixed(4));
console.log((parseInt(c)));
console.log((parseFloat(c)));
console.log(typeof a, typeof b, typeof c);
console.log(a+b);
console.log(c+d);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));