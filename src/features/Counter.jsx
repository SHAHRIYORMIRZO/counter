import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increase, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [increaseNumber, setIncreaseNumber] = useState(0);

  const AddValue = Number(increaseNumber) || 0;

  const incrementHandler = () => {
    return dispatch(increment());
  };
  const decrementHandler = () => {
    return dispatch(decrement());
  };
  const resetHandler = () => {
    setIncreaseNumber(0);
    dispatch(reset());
  };

  const increaseHandler = (e) => {
    return setIncreaseNumber(e.target.value);
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={resetHandler}>RESET</button>
        <div>
          <input
            type="number"
            value={increaseNumber}
            onChange={increaseHandler}
          />
          <button onClick={() => dispatch(increase(AddValue))}>increase</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
