import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intern2Grow Task",
  description: "Products listing and details pages built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}