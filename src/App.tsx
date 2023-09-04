import Staff from "./components/Staff";
import useOpus from "./hooks/useOpus";
import { OpusContext } from "./context/OpusContext";
import Tempo from "./components/Tempo";
import SoundControl from "./components/SoundControl";
import { useState } from "react";
import { start } from "tone";

export default function App() {
  const [audioStarted, setAudioStarted] = useState(false);
  const opus = useOpus();

  async function startAudio() {
    await start();
    setAudioStarted(true);
  }

  return audioStarted ? (
    <OpusContext.Provider value={opus}>
      <div className="flex flex-col gap-4 md:px-[12vw] py-[1in]">
        <Tempo />
        <SoundControl>
          <Staff />
        </SoundControl>
      </div>
    </OpusContext.Provider>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="text-green-700 text-3xl px-6 py-3 bg-black transition-colors hover:bg-green-600 rounded-full hover:text-green-800"
        onClick={startAudio}
      >
        Start
      </button>
    </div>
  );
}
