import type { Metadata } from "next";
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from './context/themeContext';
import StyledComponentsRegistry from '../../lib/registry'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Sobchacki",
  description: "Full Stack Developer | I make computers go beep boop",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
