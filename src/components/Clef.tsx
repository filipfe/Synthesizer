import { bass, treble } from "../assets/clefs/clefs";
import { ClefType } from "../types/general";

export default function Clef({ clef }: { clef: ClefType }) {
  switch (clef) {
    case ClefType.TREBLE:
      return <img className="h-16" src={treble} alt={ClefType[clef]} />;
    case ClefType.BASS:
      return (
        <img className="h-8 top-1 relative" src={bass} alt={ClefType[clef]} />
      );
    default:
      return <img className="h-16" src={treble} alt={ClefType[clef]} />;
  }
}
