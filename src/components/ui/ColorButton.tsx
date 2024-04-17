import React from "react";

type Props = { text: string; onClick: () => void };

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-md bg-gradient-to-tr from-amber-300 via-rose-500 to-fuchsia-600 p-[0.15rem]">
      <button
        className="bg-white hover:opacity-90 active:opacity-70 text-base p-[0.3rem] rounded-sm transition-opacity"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
