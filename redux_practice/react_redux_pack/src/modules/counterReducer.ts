export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increase = () => {
  return { type: INCREASE };
};
export const decrease = () => {
  return { type: DECREASE };
};

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
