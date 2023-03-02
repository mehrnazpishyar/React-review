import React, { useState } from "react";
import Timer from "./Timer";

const Toggle = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button>
     {isShow && <Timer /> } 
    </div>
  );
};

export default Toggle;
