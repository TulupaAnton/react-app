import { useState } from "react";

function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);

  function dectement(e) {
    setCount(count - 1);
  }
  function increment(e) {
    setCount(count + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={dectement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
