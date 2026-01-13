import { useState } from "react";
import { findNthPrime } from "../utils/Helper";
import { useMemo } from "react";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const result = useMemo(() => findNthPrime(text));

  console.log("Redering...");
  // Every time the state changes(when we write something) the component re-renders
  // to avoid this we use useMemo() hook;
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className=" border border-black w-72 px-2"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <p>nth Prime : {result}</p>
      </div>
    </div>
  );
};

export default Demo;
