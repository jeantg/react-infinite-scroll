/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

export type InfiniteScrollProps = {
  children: ReactNode;
  variant?: string;
  onLoad: (e: number) => void;
  debounceTimeOut?: number;
  dir?: "top" | "bottom";
};
export enum Dir {
  TOP = "top",
  BOTTOM = "bottom",
}
