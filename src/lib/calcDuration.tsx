import { BarProps } from "../types/bar";
import { DurationType } from "../types/note";

export default function calcDuration(bar: BarProps): DurationType | null {
  const { notes, timeSignature } = bar;
  const totalDurationOfNotes = notes.reduce(
    (curr, prev) => (curr += 1 / prev.duration),
    0
  );
  const space = timeSignature.quantity / timeSignature.value;
  const availableSpace = space - totalDurationOfNotes;
  const availableNoteKey = (
    Object.keys(DurationType) as Array<keyof typeof DurationType>
  ).find((key) => 1 / DurationType[key] <= availableSpace);

  const availableNote = availableNoteKey
    ? DurationType[availableNoteKey]
    : null;

  return availableNote;
}
