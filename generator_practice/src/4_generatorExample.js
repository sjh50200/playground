// generator 함수로 자연수 집합 표현하기
function* naturalNumbers() {
  let v = 1;
  while (true) {
    yield v++;
  }
}

const gen = naturalNumbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
