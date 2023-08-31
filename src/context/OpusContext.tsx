import { Dispatch, SetStateAction, createContext } from "react";
import { BarProps } from "../types/bar";

export type OpusContextType = {
  bars: BarProps[];
  setBars: Dispatch<SetStateAction<BarProps[]>>;
};

export const OpusContext = createContext<OpusContextType>(null!);
