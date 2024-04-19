import React from "react";

type Props = { text: string; onClick: () => void; size?: "small" | "big" };

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-tr from-amber-300 via-rose-500 to-fuchsia-600 p-[0.15rem] ${
        size === "big" ? "text-2xl" : ""
      }`}
    >
      <button
        className={`bg-white hover:opacity-90 active:opacity-70 rounded-sm transition-opacity
        ${size === "big" ? "text-2xl p-[0.5rem]" : "text-base p-[0.3rem]"}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
