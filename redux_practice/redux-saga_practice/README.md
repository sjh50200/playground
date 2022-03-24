## 부수 효과

```jsx
export function* fetchData(action) {
  //put은 redux action을 발생 시킴
  yield put(actions.setLoading(true));
  //positive 방식(api call이 성공했다고 가정)으로 like 카운트를 하나 증가시킴
  yield put(actions.addLike(action.timeline.id, 1));
  //call effect는 뒤의 함수를 실행시켜줌
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  //takeLeading 첫 번째 매개변수의 action이 넘어왔을 때, 두 번째 매개변수 실행
  yield all(takeLeading(types.REQUEST_LIKE, fetchData));
}

const a = take(types.REQUEST_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log(a, b, c);

const logResult = {
  a: {
    TAKE: {
      pattern: "timeline/REQUEST_LIKE",
    },
  },
  b: {
    PUT: {
      channel: null,
      action: {
        type: "timeline/SET_LOADING",
        isLoading: false,
      },
    },
  },
  c: {
    CALL: {
      context: null,
      fn: callApiLike,
      args: [],
    },
  },
};
```

redux-saga의 부수효과 함수는 해야 할 일을 설명하는 자바스크립트 객체를 반환한다.

이렇게 반환된 객체는 yield를 호출했을 때 사가 미들웨어에게 전달이 된다.

redux의 미들웨어에서 saga 미들웨어가 돌아가고 있는데, saga 미들웨어는 부수효과 객체가 설명하는 일을 한 후 결과와 함께 실행 흐름을 제너레이터 쪽으로 넘겨주게 된다.

```jsx
yield put(actions.setLoading(true));
```

한 줄에 의해 saga 미들웨어 쪽으로 put에 대한 정보를 넘기고

saga 미들웨어가 처리를 한 후, 다시 다음 줄인

```jsx
yield put(actions.addLike(action.timeline.id, 1));
```

가 실행이 되고, 이 과정이 반복된다.

이 과정을 반복하면서, 우리가 작성한 함수와 saga 미들웨어가 협업을 하는 것이다.

### takeLeading effect

![Mar-22-2022 17-39-41.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e75f5ab1-a4ba-40d4-9189-332b99639497/Mar-22-2022_17-39-41.gif)

좋아요 카운트가 올라가기 전까진 아무런 작업도 실행 되지 않는다.

⇒ **takeLeading effect는 아직 처리 되고 있는 action이 있을 때, 그 사이에 들어온 action은 무시가 되며, 처음 들어온 action에 우선 순위를 높게 두어 처리를 한다.**

### takeLatest effect

![takeLatest.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e554405e-550a-4b09-b235-564c965f6ca3/takeLatest.gif)

⇒ takeLeading의 반대

- 처리 중인 것을 취소시키고, 마지막에 들어온 action을 실행 시킴
