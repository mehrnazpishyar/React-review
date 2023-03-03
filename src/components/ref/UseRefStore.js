import React, { useEffect, useRef, useState } from "react";

const UseRefStore = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const previousValue = useRef();
  const previousCount = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);


  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is " {inputValue} " and it used to be " {previousValue.current}{" "}
        "
      </p>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        Generate random
      </button>
      <div>count is : {count}</div>
      <div>previousCount is : {previousCount.current}</div>
    </div>
  );
};

export default UseRefStore;
