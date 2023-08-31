import { initialBars } from "../const/notes";
import { OpusContextType } from "../context/OpusContext";
import { BarProps } from "../types/bar";
import { useState } from "react";

export default function useOpus(): OpusContextType {
  const [bars, setBars] = useState<BarProps[]>(initialBars);
  return {
    bars,
    setBars,
  };
}
