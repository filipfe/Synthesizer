import { ClefType, TimeSignature } from "./general"
import { NoteProps } from "./note";

export type BarProps = {
    clef: ClefType;
    timeSignature: TimeSignature;
    previousBar?: Omit<BarProps, 'previousBar'> | null;
    isFirst?: boolean;
    notes: NoteProps[]
}