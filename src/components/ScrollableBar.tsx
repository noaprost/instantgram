import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 3000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

export default function ScrollableBar({ children }: { children: ReactNode }) {
  return (
    <Carousel
      responsive={responsive}
      containerClass="flex gap-6 w-full justify-center"
    >
      {children}
    </Carousel>
  );
}
