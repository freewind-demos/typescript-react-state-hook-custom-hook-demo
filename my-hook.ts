import {useState, useEffect, SetStateAction} from "react";

export default function useMyHook(initCount: number): [number, (i: SetStateAction<number>) => void] {
  console.log('> useMyHook: ', initCount);
  const [count, setCount] = useState(initCount)
  useEffect(() => {
    console.log('use effect')
    return () => {
      console.log('clean up')
    }
  });
  return [count, setCount];
}
