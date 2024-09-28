import Nav from "./components/nav";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "FMs4Bio",
  description:
    "2nd AAAI Workshop on Foundation Models for Biological Discoveries (FMs4Bio)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} antialiased flex justify-center`}>
        <Nav />
        <main className="w-[calc(100vw-120px)] max-w-[2000px]">{children}</main>
      </body>
    </html>
  );
}
