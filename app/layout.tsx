import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intern2Grow Task",
  description: "Products fetch and details pages",
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