import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface PropsType {
  children: React.ReactNode;
  params: { locale: string };
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
  params: { locale },
}: Readonly<PropsType>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar locale={locale} />
        {children}
        <div id="modal-area">{modal}</div>
      </body>
    </html>
  );
}
