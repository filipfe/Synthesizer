import { useState, useEffect, useCallback, useContext, useRef } from "react";
import { MembraneSynth } from "tone";
import { OpusContext } from "../context/OpusContext";
import { NoteProps } from "../types/note";

export default function SoundPlayer({ children }: { children: JSX.Element }) {
  const { setBars } = useContext(OpusContext);
  const [octave, setOctave] = useState(4);
  const shouldRun = useRef(false);
  const synth = useRef(new MembraneSynth().toDestination());

  useEffect(() => {
    const detectKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setOctave((prev) => prev + 1);
          break;
        case "ArrowDown":
          setOctave((prev) => prev - 1);
          break;
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "a":
        case "b":
          synth.current.triggerAttackRelease(`${e.key}${octave}`, "8n");
          setBars((prev) => {
            const newBars = [...prev];
            const lastBar = newBars[newBars.length - 1];
            const newNote: NoteProps = {
              duration: 8,
              pitch: {
                name: e.key.toUpperCase(),
                octave,
              },
            };
            if (lastBar.notes.length > 1) {
              newBars.push({
                ...lastBar,
                notes: [newNote],
              });
              return newBars;
            } else {
              lastBar.notes.push(newNote);
              return newBars;
            }
          });
          shouldRun.current = false;
          break;
        default:
          break;
      }
    };
    shouldRun.current && window.addEventListener("keydown", detectKeyPress);
    return () => {
      shouldRun.current = true;
      window.removeEventListener("keydown", detectKeyPress);
    };
  }, []);

  return children;
}
