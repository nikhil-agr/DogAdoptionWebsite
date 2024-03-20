import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animation",
  description: "By Ashish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        </body>
    </html>
  );
}
