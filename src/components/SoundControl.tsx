import { useState, useEffect, useRef, useContext } from "react";
import { Synth, Pattern, Transport } from "tone";
import { OpusContext } from "../context/OpusContext";

export default function SoundControl({ children }: { children: JSX.Element }) {
  const { bars, tempo, addNote, changeCurrentNote } = useContext(OpusContext);
  const [octave, setOctave] = useState(4);
  const synth = useRef(new Synth().toDestination());

  useEffect(() => {
    const detectKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setOctave((prev) => prev + 1);
          break;
        case "ArrowDown":
          setOctave((prev) => prev - 1);
          break;
        // case "Backspace":
        //   deleteNote();
        //   break;
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "a":
        case "b":
          const isSharp = e.shiftKey;
          const isFlat = e.ctrlKey;
          const newNote = addNote({
            pitch: {
              name: `${e.key.toUpperCase()}${
                isSharp ? "#" : isFlat ? "b" : ""
              }`,
              octave,
            },
          });
          synth.current.triggerAttackRelease(
            `${e.key}${isSharp ? "#" : isFlat ? "b" : ""}${octave}`,
            `${newNote.duration}n`
          );
          break;
        case "p":
          playOpus();
          break;
        case "s":
          Transport.stop();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", detectKeyPress);
    return () => {
      window.removeEventListener("keydown", detectKeyPress);
    };
  }, [bars, tempo]);

  const playOpus = () => {
    const notes = bars.flatMap((bar) => bar.notes);
    const pattern = new Pattern((time, note) => {
      changeCurrentNote(note.time);
      synth.current.triggerAttackRelease(
        `${note.pitch.name}${note.pitch.octave}`,
        `${note.duration}n`,
        time
      );
    }, notes);
    pattern.start(0);
    Transport.timeSignature = [11, 4];
    Transport.start();
  };

  return children;
}
