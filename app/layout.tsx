import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import WhatsappButton from "./(public)/components/WhatsappButton";
import TopButton from './(public)/components/TopButton';

export const metadata: Metadata = {
  title: "Expresso São Francisco",
  description: "Transporte e Logística"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <WhatsappButton />
          <TopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
