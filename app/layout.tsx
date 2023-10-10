"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Leave Board",
  description: "Megaverse Technologies, Lahore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
