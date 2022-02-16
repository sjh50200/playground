export {};

function f1(): void {
    console.log('hello');
}
//아무 것도 반환하지 않는 함수 타입
function f2(): never {
    throw new Error('some error');
}
//항상 예외가 발생해서 비정상적으로 종료되거나
//무한 루프 때문에 종료 되지 않는 함수의 반환 타입
function f3(): never {
    while(true) {
        //...
    }
}

// 보통 never타입은 정의할 일이 없는데
// 이런게 있다 라는 정도로만 이해하면 될 것이다.