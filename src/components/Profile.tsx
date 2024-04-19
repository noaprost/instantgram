import React from "react";

type Props = {
  image?: string | null;
  ring?: boolean;
  size?: "small" | "big";
};

export default function Profile({
  image,
  ring = false,
  size = "small",
}: Props) {
  return (
    <div className={getContainStyle(size, ring)}>
      {/**
       * 로그인한 정보에서 얻어오는 url이기 때문에 도메인 각각 다른데, 이를 다 설정해줄 수 없음
       * 따라서 next js에서 제공해주는 image 대신에 img 태그를 사용
       */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt="user profile"
        className={`rounded-full bg-white object-cover ${getImageSizeStyle(
          size
        )}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainStyle(size: string, ring: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const ringStyle = ring
    ? "bg-gradient-to-tr from-amber-300 via-rose-500 to-fuchsia-600"
    : "";
  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";

  return `${baseStyle} ${ringStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small"
    ? "w-[31px] h-[31px] p-[0.1rem]"
    : "w-16 h-16 p-[0.2rem]";
}
