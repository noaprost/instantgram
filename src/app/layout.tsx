import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const roboto = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    default: "instantgram",
    template: "Instantgram | %s",
  },
  description: "Instagram Photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <AuthContext>
        <body className="bg-neutral-50 w-full overflow-auto vsc-initialized">
          <Header />
          <main className="w-full flex justify-center min-h-full max-w-screen-xl mx-auto">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div id="portal" />
        </body>
      </AuthContext>
    </html>
  );
}
