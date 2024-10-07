import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOQUE",
  description: "Task management web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
