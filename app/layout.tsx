import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quantum Ethics",
  description: "Understanding the ethical risks of advanced quantum computing",
  icons: {
    icon: "/Logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {/* Fixed Logo */}
        <div className="fixed top-6 left-6 z-50">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
