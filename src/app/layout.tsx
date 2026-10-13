
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FriendSpace | Connect with Friends",
  description:
    "A social network to connect with friends, share posts, and build your community.",
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
