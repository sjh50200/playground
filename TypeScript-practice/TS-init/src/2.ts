export {};

let v1: undefined = undefined;
let v2: null = null;
v1 = 123;

let v3: number | undefined = undefined;
v3 = 123;

console.log('typeof undefined =>', typeof undefined);
console.log('typeof null =>', typeof null); // null은 object로 표현됨
