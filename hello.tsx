import React from 'react'
import useMyHook from "./my-hook";

export default function Hello() {
  const [count, setCount] = useMyHook(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
