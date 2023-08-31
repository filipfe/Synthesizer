import { BarContext } from "../context/BarContext";
import { NoteProps } from "../types/note";
import Note from "./Note";
import { useContext } from "react";

type Props = {
  children: NoteProps[];
  isGap?: boolean;
  isOuter?: boolean;
};

export default function Line({ children: notes, isGap, isOuter }: Props) {
  const { isFirst, timeSignature } = useContext(BarContext);
  return (
    <div
      style={{
        gridTemplateColumns: timeSignature.quantity * timeSignature.value,
      }}
      className={`pl-20 ${
        isOuter
          ? "h-3 flex items-center"
          : isGap
          ? `h-3 md:border-r-[1px] border-green-700 flex items-center ${
              isFirst ? "md:border-l-[1px]" : "border-l-0"
            }`
          : `h-[1px] bg-green-700 flex items-center`
      }`}
    >
      {notes.map((item, i) => (
        <Note {...item} key={`note:${i}`} />
      ))}
    </div>
  );
}
