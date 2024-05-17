type ProfileSize = "small" | "big" | "xlarge";
type Props = {
  image?: string | undefined;
  ring?: boolean;
  size?: ProfileSize;
};

export default function Profile({
  image,
  ring = false,
  size = "small",
}: Props) {
  return (
    <div className={getContainerStyle(size, ring)}>
      {/**
       * 로그인한 정보에서 얻어오는 url이기 때문에 도메인 각각 다른데, 이를 다 설정해줄 수 없음
       * 따라서 next js에서 제공해주는 image 대신에 img 태그를 사용
       */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt="user profile"
        className={`rounded-full bg-white object-cover ${
          getImageSizeStyle(size).image
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: ProfileSize, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const { container } = getImageSizeStyle(size);
  return `${baseStyle} ${highlightStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};

function getImageSizeStyle(size: ProfileSize): ImageSizeStyle {
  switch (size) {
    case "small":
      return {
        container: "w-9 h-9",
        image: "w-[31px] h-[31px] p-[0.1rem]",
      };
    case "big":
      return {
        container: "w-[68px] h-[68px]",
        image: "w-16 h-16 p-[0.2rem]",
      };
    case "xlarge":
      return {
        container: "w-[142px] h-[142px]",
        image: "w-[138px] h-[138px] p-[0.3rem]",
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
