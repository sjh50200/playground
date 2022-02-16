import React, { FunctionComponent } from "react";

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter: FunctionComponent<CounterProps> = (props) => {
  const { count, onIncrease, onDecrease } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>+1</button>
    </div>
  );
};

export default Counter;
