import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/Components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PawsNation",
  description: "Generated by create next app",
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
