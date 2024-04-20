"use client";

import { ReactNode } from "react";
import reactDOM from "react-dom";

type Props = {
  children: ReactNode;
};

export default function ModalPortal({ children }: Props) {
  // ssr 환경에서 동작하지 않도록 하기 위해 브라우저 환경이 아닐 때는 null을 반환해줌
  if (typeof window === "undefined") {
    return null;
  }

  const node = document.getElementById("portal") as Element;

  return reactDOM.createPortal(children, node);
}
