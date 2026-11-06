import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Campus Event Board",
  description: "Discover, explore and save exciting campus events.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}