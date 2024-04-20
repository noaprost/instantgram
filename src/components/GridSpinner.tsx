import dynamic from "next/dynamic";

// dynamic lazy import
const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

type Props = {
  color?: string;
};

export default function GridSpinner({ color = "orange" }: Props) {
  return <GridLoader color={color} />;
}
