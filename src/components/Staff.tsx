import Bar from "./Bar";
import { useState, useContext } from "react";
import { OpusContext } from "../context/OpusContext";

export default function Staff() {
  const { bars } = useContext(OpusContext);
  const [barsPerStaff, setBarsPerStaff] = useState(4);
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${barsPerStaff}, 1fr)` }}
      className={`grid max-md:!grid-cols-1 gap-y-12`}
    >
      {bars.map((bar, index) => (
        <Bar
          {...bar}
          previousBar={bars[index - 1]}
          isFirst={index % barsPerStaff === 0}
          key={index}
        />
      ))}
    </div>
  );
}
