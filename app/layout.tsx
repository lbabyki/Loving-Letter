import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gửi Cục Cưng Của Anh ♡",
  description: "Một thế giới nhỏ đáng yêu dành riêng cho Cục cưng.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
