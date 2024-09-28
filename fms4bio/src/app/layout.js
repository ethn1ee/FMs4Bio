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
      <body className={`${hankenGrotesk.className} antialiased mx-[60px]`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
