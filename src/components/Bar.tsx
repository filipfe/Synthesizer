import { trebleClefNotes } from "../const/notes";
import { BarContext } from "../context/BarContext";
import { BarProps } from "../types/bar";
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
    <div className={`flex flex-col relative justify-center w-full`}>
      {(isFirst || !isTheSameTime || !isTheSameClef) && (
        <div className="absolute left-3 flex items-center gap-2 z-10">
          {(isFirst || !isTheSameClef) && <Clef clef={clef} />}
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
      <BarContext.Provider value={{ isFirst, timeSignature, clef }}>
        {trebleClefNotes.map((note, index) => {
          const [name, octave] = note;
          const isOuter = index === 0 || index === trebleClefNotes.length - 1;
          return (
            <Line isGap={!isOuter && index % 2 === 0} isOuter={isOuter}>
              {notes.filter(
                (item) =>
                  item.pitch.name.includes(name) &&
                  item.pitch.octave === parseInt(octave)
              )}
            </Line>
          );
        })}
      </BarContext.Provider>
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
  );
}
