import {useState, useEffect, SetStateAction} from "react";

export default function useMyHook(initCount: number): [number, (i: SetStateAction<number>) => void] {
  const [count, setCount] = useState(initCount)
  useEffect(() => {
    console.log('use effect')
    return () => {
      console.log('clean up')
    }
  });
  return [count, setCount];
}
