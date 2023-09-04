import { OpusContext } from "../context/OpusContext";
import { useContext } from "react";

export default function Tempo() {
  const { tempo, changeTempo } = useContext(OpusContext);
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-end">
        <div
          className={`h-6 w-[2px] bg-green-700 group-hover:bg-green-800 transition-colors -mb-1`}
        />
        <button className="bg-green-700 hover:bg-green-800 w-3 h-2 rounded-full group transition-colors relative"></button>
      </div>
      <span className="text-green-700">=</span>
      <input
        className="text-green-700 max-w-max w-max p-0 m-0"
        type="number"
        value={tempo}
        onChange={(e) => changeTempo(parseInt(e.target.value))}
      />
    </div>
  );
}
