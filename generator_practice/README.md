# generator function

```jsx
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
```

## ⇒ gen을 호출하면 generator 객체가 반환된다.

- next()
  ![Untitled](generator%20%2092219/Untitled.png)

## ⇒ iterator과 iterable

- iterator
  - next 메소드를 가지고 있다.
  - next 메소드는 value와 done 속성값을 가진 객체를 반환한다.
  - done 속성은 작업 값이 끝났을 때, 참이 된다.
- 다음 조건을 만족하면 iterable한 객체이다.
  - Symbol.iterator 속성값으로 함수를 가지고 있다.
  - 해당 함수를 호출하면 반복자(iterator)를 반환한다.
  -
  ```jsx
  console.log(gen[Symbol.iterator]() === gen); // true
  ```

### generator 객체는 iterator 이면서 iterable 한 객체이다!

## ⇒ 알고 보면 배열도 iterable 하다?!

```jsx
const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();
console.log(iter.next()); // {value: 10, done: false}
```

## ⇒ iterable한 객체 handling 하기

```jsx
function* f1() {
  yield 10;
  yield 20;
  yield 30;
}
for (const v of f1()) {
  console.log(v);
}
const arr = [...f1()];
console.log(arr); // [10, 20, 30]
```

- iterable 한 객체를 for of 문을 통해서 반복문을 돌릴 수 있다.
- spread operator를 사용하여 전개시킬 수 있다.
  - 배열을 f1() 위치에 넣어서 많이 사용하였는데, **이는 배열이 iterable 하기 때문에 가능한 것이었다.**

## ⇒ generator 함수와 일반 함수 협력하기

```jsx
// redux-saga 함수 구현 부
function* heedong() {
  const myMsgList = [
    "안녕 나는 희동이야",
    "만나서 반가워",
    "내일 영화 볼래?",
    "시간 안되니?",
    "내일 모레는 어때?",
  ];
  for (const msg of myMsgList) {
    console.log("수지: ", yield msg);
  }
}

// saga 미들웨어 파트
const suji = () => {
  const myMsgList = ["", "그래 나는 수지야", "나도 반가워", "..."];
  const gen = heedong();
  for (const msg of myMsgList) {
    console.log("희동: ", gen.next(msg).value);
  }
};

suji();
```
