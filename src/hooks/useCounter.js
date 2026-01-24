import { useState } from "react";

function useCounter(iv, step) {
  var [count, setCount] = useState(iv);
  function incCount() {
    setCount(count + step);
  }
  function decCount() {
    setCount(count - step);
  }
  return [count, incCount, decCount];
}
export default useCounter;
