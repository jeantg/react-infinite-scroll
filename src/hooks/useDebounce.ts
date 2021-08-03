import { useRef } from "react";

export function useDebounce(callback: any, delay: number): any {
  const ref = useRef<number | undefined>(0);
  return function debounced(...args: any[]) {
    return new Promise((resolve) => {
      clearTimeout(ref.current);
      const timeout: any = setTimeout(() => {
        resolve(callback(...args));
      }, delay);
      ref.current = timeout;
    });
  };
}
