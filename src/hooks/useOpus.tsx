import { initialBars } from "../const/notes";
import { OpusContextType } from "../context/OpusContext";
import { BarProps } from "../types/bar";
import { useCallback, useState, useEffect } from "react";
import { NoteProps } from "../types/note";
import calcDuration from "../lib/calcDuration";
import { Transport } from "tone";

export default function useOpus(): OpusContextType {
  const [currentNoteTime, setCurrentNoteTime] = useState<string | null>(null);
  const [tempo, setTempo] = useState(120);
  const [bars, setBars] = useState<BarProps[]>(initialBars);

  const addBar = (bar: BarProps) => setBars((prev) => [...prev, bar]);

  const deleteBar = () =>
    bars.length > 1 &&
    setBars((prev) => {
      let newArr = [...prev];
      newArr.pop();
      return newArr;
    });

  const addNote = useCallback(
    (note: Pick<NoteProps, "pitch">) => {
      const lastBar = [...bars][bars.length - 1];
      const availableNoteTime = calcDuration(lastBar);
      if (availableNoteTime) {
        const lastNote = [...lastBar.notes].pop()!;
        lastNote.duration;
        lastNote.time;
        const newNote: NoteProps = {
          ...note,
          duration: availableNoteTime,
          time: `${bars.length - 1}:0`,
        };
        lastBar.notes.push(newNote);
        setBars((prev) => {
          let newArr = [...prev];
          newArr[newArr.length - 1] = lastBar;
          return newArr;
        });
        return newNote;
      } else {
        const { pitch } = note;
        const newNote = {
          pitch,
          duration: lastBar.timeSignature.value,
          time: `${bars.length}:0`,
        };
        addBar({
          ...lastBar,
          notes: [newNote],
        });
        return newNote;
      }
    },
    [bars]
  );

  const deleteNote = useCallback(() => {
    const lastBar = [...bars][bars.length - 1];
    if (lastBar.notes.length > 0) {
      lastBar.notes.pop();
      setBars((prev) => {
        let newArr = [...prev];
        newArr[newArr.length - 1] = lastBar;
        return newArr;
      });
    } else deleteBar();
  }, [bars]);

  const changeTempo = (bpm: number) => {
    setTempo(bpm);
    Transport.bpm.value = bpm;
    localStorage.setItem("tempo", bpm.toString());
  };

  const changeCurrentNote = (time: string | null) => {
    setCurrentNoteTime(time);
  };

  useEffect(() => {
    function fetchConfig() {
      const tempoFromStorage = localStorage.getItem("tempo");
      if (!tempoFromStorage) return;
      const bpm = parseInt(tempoFromStorage);
      Transport.bpm.value = bpm;
      setTempo(bpm);
    }
    fetchConfig();
  }, []);

  return {
    bars,
    tempo,
    addBar,
    addNote,
    deleteNote,
    changeTempo,
    currentNoteTime,
    changeCurrentNote,
  };
}
