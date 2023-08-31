import { NoteProps } from "../types/note";

export default function Note({ duration, pitch }: NoteProps) {
  const { name } = pitch;
  return (
    <button
      className={`${
        duration > 1
          ? "bg-green-700 hover:bg-green-800"
          : "border-green-700 border-[1px] hover:border-green-800"
      } w-3 h-2 rounded-full relative group transition-colors cursor-pointer flex items-center`}
    >
      <div className="absolute right-[120%]">
        {name[1] === "#" ? (
          <span className="text-green-700 text-xl transition-colors group-hover:text-green-800">
            #
          </span>
        ) : (
          name[1] === "b" && (
            <span className="text-green-700 text-xl transition-colors group-hover:text-green-800 relative bottom-[2px] right-[2px]">
              b
            </span>
          )
        )}
      </div>
      {duration > 2 && (
        <div className="absolute right-0 bottom-1 h-6 w-[2px] bg-green-700 group-hover:bg-green-800 transition-colors"></div>
      )}
    </button>
  );
}
