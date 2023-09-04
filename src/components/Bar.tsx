import { bassClefNotes, trebleClefNotes } from "../const/notes";
import { BarContext } from "../context/BarContext";
import { BarProps } from "../types/bar";
import { ClefType } from "../types/general";
import Clef from "./Clef";
import Line from "./Line";

export default function Bar({
  timeSignature,
  clef,
  previousBar,
  isFirst,
  notes,
}: BarProps) {
  const isTheSameTime =
    timeSignature.quantity === previousBar?.timeSignature.quantity &&
    timeSignature.value === previousBar.timeSignature.value;
  const isTheSameClef = clef === previousBar?.clef;

  // const availableSpace = timeSignature.quantity * timeSignature.value;

  return (
    <BarContext.Provider value={{ isFirst, timeSignature, clef, notes }}>
      <div className="flex flex-col">
        {notes.some((note) => note.pitch.octave > 3) && (
          <div className={`flex flex-col relative justify-center w-full`}>
            {(isFirst || !isTheSameTime || !isTheSameClef) && (
              <div className="absolute left-3 flex items-center gap-2 z-10">
                {(isFirst || !isTheSameClef) && <Clef clef={ClefType.TREBLE} />}
                {(isFirst || !isTheSameTime) && (
                  <div className="flex flex-col">
                    <span className="text-green-700 text-2xl leading-none">
                      {timeSignature.quantity}
                    </span>
                    <span className="text-green-700 text-2xl leading-none">
                      {timeSignature.value}
                    </span>
                  </div>
                )}
              </div>
            )}

            {trebleClefNotes.map((note, index) => (
              <Line
                noteName={note}
                isGap={index % 2 === 0}
                isOuter={index === 0 || index === trebleClefNotes.length - 1}
              />
            ))}
            {/* {notes
        .filter(
          (item) =>
          (item.pitch.octave === 4 && item.pitch.name === "C") ||
          item.pitch.octave < 4
          )
          .map((item, index, array) => (
            <div className="absolute flex flex-col gap-4 -bottom-[14px] left-16">
            {Array.from(Array(array.length - 1)).map((_, i) => (
              <div
                className="h-[1px] bg-green-700 w-5 flex items-center justify-center"
                key={i}
              />
            ))}
            <div className="h-[1px] bg-green-700 w-5 flex items-center justify-center">
            <div className="bg-green-700 w-3 h-2 rounded-full relative">
            <div className="absolute right-0 bottom-1 h-6 w-[2px] bg-green-700"></div>
            </div>
            </div>
            </div>
          ))} */}
          </div>
        )}
        {notes.some(
          (note) => `${note.pitch.name}${note.pitch.octave}` !== "C4"
        ) && (
          <div className="flex flex-col relative justify-center w-full">
            <Line noteName="C4" isOuter />
          </div>
        )}
        {notes.some(
          (note) =>
            note.pitch.octave < 4 &&
            `${note.pitch.name}${note.pitch.octave}` !== "C4"
        ) && (
          <div className={`flex flex-col relative justify-center w-full`}>
            {(isFirst || !isTheSameTime || !isTheSameClef) && (
              <div className="absolute left-3 flex items-center gap-2 z-10">
                {(isFirst || !isTheSameClef) && <Clef clef={ClefType.BASS} />}
                {(isFirst || !isTheSameTime) && (
                  <div className="flex flex-col">
                    <span className="text-green-700 text-2xl leading-none">
                      {timeSignature.quantity}
                    </span>
                    <span className="text-green-700 text-2xl leading-none">
                      {timeSignature.value}
                    </span>
                  </div>
                )}
              </div>
            )}
            {bassClefNotes.map((note, index) => (
              <Line
                noteName={note}
                isGap={index % 2 === 0}
                isOuter={index === 0 || index === bassClefNotes.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </BarContext.Provider>
  );
}
