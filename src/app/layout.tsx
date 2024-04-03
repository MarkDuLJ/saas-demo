import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { ThemeProvider } from "@/src/providers/theme-provider";
import "./globals.css";

const roboto = Roboto({weight:'400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"SAAS",
    template: '%s | SAAS'
  },
  description: "automate your work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
