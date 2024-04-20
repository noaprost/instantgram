import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const roboto = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Instagram",
  description: "Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <AuthContext>
        <body>
          <Header />
          <main className="w-full flex justify-center bg-neutral-50 min-h-full">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div id="portal" />
        </body>
      </AuthContext>
    </html>
  );
}
