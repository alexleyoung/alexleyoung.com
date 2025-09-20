import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css";

const font = EB_Garamond({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALEX YOUNG | PORTFOLIO",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
