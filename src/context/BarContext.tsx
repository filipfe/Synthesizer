import { createContext } from "react";
import { ClefType, TimeSignature } from "../types/general";
import { NoteProps } from "../types/note";

export type BarContextType = {
  isFirst?: boolean;
  clef: ClefType;
  timeSignature: TimeSignature;
  notes: NoteProps[];
};

export const BarContext = createContext<BarContextType>(null!);
