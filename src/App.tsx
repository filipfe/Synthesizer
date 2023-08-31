import SoundPlayer from "./components/SoundPlayer";
import Staff from "./components/Staff";
import useOpus from "./hooks/useOpus";
import { OpusContext } from "./context/OpusContext";

export default function App() {
  const opus = useOpus();
  // const [title, setTitle] = useState({
  //   value: "Untitled",
  //   editable: false,
  // });
  return (
    <OpusContext.Provider value={opus}>
      <div className="flex flex-col gap-16 md:px-[12vw] py-[1in]">
        {/* <h1 className="flex flex-col items-center">
        <input
          className="text-5xl text-green-700 text-center w-max max-w-max min-w-0 p-0 bg-transparent outline-none"
          type="text"
          disabled={!title.editable}
          value={title.value}
          onChange={(e) =>
            setTitle((prev) => ({ ...prev, value: e.target.value }))
          }
          onDoubleClick={() =>
            setTitle((prev) => ({ ...prev, editable: true }))
          }
          onBlur={() => setTitle((prev) => ({ ...prev, editable: false }))}
        />
      </h1> */}
        <SoundPlayer>
          <Staff />
        </SoundPlayer>
      </div>
    </OpusContext.Provider>
  );
}
