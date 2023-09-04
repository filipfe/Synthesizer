import Staff from "./components/Staff";
import useOpus from "./hooks/useOpus";
import { OpusContext } from "./context/OpusContext";
import Tempo from "./components/Tempo";
import SoundControl from "./components/SoundControl";

export default function App() {
  const opus = useOpus();
  return (
    <OpusContext.Provider value={opus}>
      <div className="flex flex-col gap-4 md:px-[12vw] py-[1in]">
        <Tempo />
        <SoundControl>
          <Staff />
        </SoundControl>
      </div>
    </OpusContext.Provider>
  );
}
