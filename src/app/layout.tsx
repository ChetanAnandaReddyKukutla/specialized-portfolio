import type { Metadata } from "next";
import { Inter , Calistoga } from 'next/font/google';
import Script from "next/script";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });


export const metadata: Metadata = {
  title: "chetanstack.dev",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.adobeDataLayer = window.adobeDataLayer || [];
              }
            `,
          }}
        />
        <link rel="icon" href="/star.svg" type="image/svg+xml" />
        <link rel="icon" href="/star.png" type="image/png" />
        <link rel="shortcut icon" href="/star.svg" type="image/svg+xml" />
        <Script
          src="https://assets.adobedtm.com/21b53c73144b/eb1c1a333a4a/launch-614a61dcb959-development.min.js"
          strategy="afterInteractive"
        />
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
