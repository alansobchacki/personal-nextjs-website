import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './context/themeContext';
import { EasterEggProvider } from './context/easterEggContext';
import { Analytics } from "@vercel/analytics/react"
import StyledComponentsRegistry from '../../lib/registry'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alan Sobchacki",
  description: "Software Engineer | I make computers go beep boop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.variable}>
        <ThemeProvider>
          <EasterEggProvider>
            <StyledComponentsRegistry>
              {children}
              <Analytics />
            </StyledComponentsRegistry>
          </EasterEggProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
