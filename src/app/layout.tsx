import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css";
import { IntroProvider } from "@/context/IntroContext";

const nskr = Noto_Sans_KR({
  variable: "--font-inter",
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
        className={`${nskr.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <IntroProvider>
            {children}
          </IntroProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
