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
import { useSession, signIn, signOut } from "next-auth/react";
import Profile from "./Profile";

export default function Header() {
  const path = usePathname();
  const { status, data: session } = useSession();
  const user = session?.user;

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

  return (
    <header className="flex justify-between w-full py-4 sticky top-0 bg-white z-10 border-b mb-4 max-w-screen-xl mx-auto">
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
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Profile image={user.image} ring />
              </Link>
            </li>
          )}
          <li>
            {status === "loading" ? (
              <ColorButton text="Loading..." onClick={() => {}} />
            ) : status === "unauthenticated" ? (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            ) : (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
