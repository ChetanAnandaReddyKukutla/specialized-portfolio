import type { Metadata } from "next";
import { Inter , Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
  icons: {
    icon: [
      { url: "/star.svg", type: "image/svg+xml" },
      { url: "/star.png", type: "image/png" }
    ],
    shortcut: "/star.svg",
    apple: "/star.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/star.svg" type="image/svg+xml" />
        <link rel="icon" href="/star.png" type="image/png" />
        <link rel="shortcut icon" href="/star.svg" type="image/svg+xml" />
      </head>
      <body className={twMerge(
        inter.variable,
        calistoga.variable,
        "bg-gray-900 text-white antialiased font-sans"
        )}
        >
          {children}
        </body>
    </html>
  );
}
