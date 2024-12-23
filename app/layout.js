import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "한국외대 컴퓨터공학부 NC 학회",
  openGraph:{
    title: "한국외대 컴퓨터공학부 NC 학회",
    description: "한국외대 컴퓨터공학부 NC 학회",
    image: "https://hufsnc.com/ogbg.png",
    keywords: ["한국외대", "컴퓨터공학부", "학회", "NC학회"],
    url: "https://hufsnc.com",
    images: ["https://hufsnc.com/logo_black.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}