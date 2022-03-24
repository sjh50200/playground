function* f1() {
  console.log("f1-1");
  yield 10;
  console.log("f1-2");
  yield 20;
  console.log("f1-3");
  return "finished";
}

const gen = f1();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
