import type { Metadata } from "next";
import { CalenderContextProvider } from "@/context/CalenderContext";
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
        <CalenderContextProvider>{children}</CalenderContextProvider>
      </body>
    </html>
  );
}
