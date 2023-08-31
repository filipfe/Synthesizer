import { createContext } from "react";
import { ClefType, TimeSignature } from "../types/general";

export type BarContextType = {
  isFirst?: boolean;
  clef: ClefType;
  timeSignature: TimeSignature;
};

export const BarContext = createContext<BarContextType>(null!);

export default function BarProvider() {}
