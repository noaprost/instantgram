"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeFillIcon,
  HomeIcon,
  NewFillIcon,
  NewIcon,
  SearchFillIcon,
  SearchIcon,
} from "./ui/icons/index";
import ColorButton from "./ui/ColorButton";

export default function Header() {
  const MENU = [
    {
      href: "/",
      icon: <HomeIcon />,
      fillIcon: <HomeFillIcon />,
    },
    {
      href: "/search",
      icon: <SearchIcon />,
      fillIcon: <SearchFillIcon />,
    },
    {
      href: "/new",
      icon: <NewIcon />,
      fillIcon: <NewFillIcon />,
    },
  ];
  const path = usePathname();
  return (
    <header className="flex justify-between px-4 py-4 sticky top-0 bg-white z-10 border-b">
      <Link href="/" className="text-3xl font-bold">
        Instantgram
      </Link>
      <nav>
        <ul className="flex gap-6 items-center">
          {MENU.map(({ href, icon, fillIcon }) => (
            <li key={href}>
              <Link href={href}>{href === path ? fillIcon : icon}</Link>
            </li>
          ))}
          <ColorButton text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </header>
  );
}
