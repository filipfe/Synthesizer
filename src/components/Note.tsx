import { OpusContext } from "../context/OpusContext";
import { NoteName, NoteProps } from "../types/note";
import { useContext } from "react";

export type AdditionalProps = {
  isOuter?: boolean;
};

export default function Note({
  duration,
  time,
  pitch,
  isOuter,
}: NoteProps & AdditionalProps) {
  const { currentNoteTime } = useContext(OpusContext);
  const { name, octave } = pitch;
  // const notePosition = time ? time / timeSignature.value - 1 : index;
  // const areaPercentage = (notePosition / (timeSignature.quantity - 1)) * 100;
  const isUpsideDown = (name === NoteName.B && octave === 4) || octave > 4;
  // const noteArea = previousNote.duration === duration ? areaPercentage : areaPercentage - 404;
  const gridColumn = parseInt(time.split(":")[1]);
  return (
    <div
      style={{ gridColumn }}
      className={`flex items-center h-[1px] w-full justify-center max-w-[24px] ${
        isOuter ? "bg-green-700" : ""
      }`}
    >
      <button
        className={`${
          duration > 2
            ? currentNoteTime === time
              ? "bg-green-400"
              : "bg-green-700 hover:bg-green-800"
            : `${
                currentNoteTime === time
                  ? "border-green-400"
                  : "border-green-700 hover:border-green-800"
              } border-[2px]`
        } w-3 h-2 rounded-full relative group cursor-pointer flex items-center`}
      >
        <div className="absolute right-[120%]">
          {name[1] === "#" ? (
            <span
              className={`${
                currentNoteTime === time ? "text-green-400" : "text-green-700"
              } text-xl group-hover:text-green-800`}
            >
              #
            </span>
          ) : (
            name[1] === "b" && (
              <span
                className={`${
                  currentNoteTime === time ? "text-green-400" : "text-green-700"
                } text-xl group-hover:text-green-800 relative bottom-[2px] right-[2px]`}
              >
                b
              </span>
            )
          )}
        </div>
        {duration > 1 && (
          <div
            className={`absolute ${
              isUpsideDown
                ? `${duration === 2 ? "-left-[2px]" : "left-0"} top-1`
                : `${duration === 2 ? "-right-[2px]" : "right-0"} bottom-1`
            } h-6 w-[2px] ${
              currentNoteTime === time ? "bg-green-400" : "bg-green-700"
            } group-hover:bg-green-800`}
          >
            {duration > 4 && (
              <div
                className={`absolute left-0 top-0 h-4 w-[2px] ${
                  currentNoteTime === time ? "bg-green-400" : "bg-green-700"
                } -rotate-[30deg] origin-top-left`}
              ></div>
            )}
          </div>
        )}
      </button>
    </div>
  );
}
