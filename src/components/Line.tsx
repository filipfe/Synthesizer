import { BarContext } from "../context/BarContext";
import Note from "./Note";
import { useContext } from "react";

type Props = {
  noteName: string;
  isGap?: boolean;
  isOuter?: boolean;
};

export default function Line({ noteName, isGap, isOuter }: Props) {
  const { isFirst, notes, timeSignature } = useContext(BarContext);
  const lineNotes = notes.filter(
    (note) =>
      note.pitch.name === noteName[0] &&
      note.pitch.octave === parseInt(noteName[1])
  );
  const styles = `${isFirst ? "pl-20" : "pl-[10%]"} ${
    isOuter
      ? "h-3"
      : isGap
      ? `h-3 md:border-r-[1px] border-green-700 ${
          isFirst ? "md:border-l-[1px]" : "border-l-0"
        }`
      : `h-[1px] bg-green-700`
  }`;
  return (
    <div className={`pr-[5%] flex items-center ${styles}`}>
      <div
        style={{
          gridTemplateColumns: `repeat(${timeSignature.quantity}, 1fr)`,
        }}
        className="relative grid h-full w-full place-items-center"
      >
        {lineNotes.map((item, i) => (
          <Note {...item} isOuter={!isGap && isOuter} key={`note:${i}`} />
        ))}
      </div>
    </div>
  );
}
