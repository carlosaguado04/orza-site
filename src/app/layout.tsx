import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Orza — macOS browser by Acidity Studio",
    template: "%s · Orza",
  },
  description:
    "Orza is a macOS browser with Spaces, tree tabs, split views, Veil, adblock, and stock AppKit chrome. From Acidity Studio.",
  metadataBase: new URL("https://orza.acidity.lol"),
  openGraph: {
    title: "Orza — macOS browser by Acidity Studio",
    description:
      "Spaces, tree tabs, split panes, Veil, and native Mac chrome. No invented features.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orza",
    description: "A macOS browser you’ll keep. From Acidity Studio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
