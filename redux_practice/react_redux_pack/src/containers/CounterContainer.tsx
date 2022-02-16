import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease } from "../modules/counterReducer";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
