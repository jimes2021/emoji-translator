import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Words to Emoji Translator - Free Online Tool",
  description:
    "Free online Words to Emoji Translator. Convert your text into emojis instantly. No sign-up required. Fast, easy, and fun to use!",
  keywords:
    "words to emoji translator, emoji translator, text to emoji, convert words to emojis, emoji converter, free emoji tool",
  openGraph: {
    title: "Words to Emoji Translator - Free Online Tool",
    description:
      "Convert your text into emojis instantly. Free, no sign-up, just type and translate!",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="canonical" href="https://wordstoemoji.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://cdn.adsterra.com/adsterra.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {children}
      </body>
    </html>
  );
}
