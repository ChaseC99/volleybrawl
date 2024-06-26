import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TabBar from "./tab-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volleybrawl",
  description: "Let's ball",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: '#1e2333',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{marginBottom: 75}}>
          {children}
        </div>
        <TabBar />
      </body>
    </html>
  );
}
