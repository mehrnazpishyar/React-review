import React, { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const resetHandler = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={changeHandler}
      />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default UseRefExample;
