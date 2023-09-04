import { createContext } from "react";
import { BarProps } from "../types/bar";
import { NoteProps } from "../types/note";

export type OpusContextType = {
  bars: BarProps[];
  tempo: number;
  currentNoteTime: string | null;
  changeCurrentNote: (time: string | null) => void;
  addBar: (bar: BarProps) => void;
  addNote: (note: Pick<NoteProps, "pitch">) => NoteProps;
  deleteNote: () => void;
  changeTempo: (bpm: number) => void;
};

export const OpusContext = createContext<OpusContextType>(null!);
