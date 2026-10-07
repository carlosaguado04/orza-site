import type { Metadata } from "next";
import { AmbientBg } from "@/components/AmbientBg";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/providers/SmoothScroll";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Orza — A Mac browser you’ll keep",
    template: "%s · Orza",
  },
  description:
    "Orza is a macOS browser with Spaces, tree tabs, split views, Veil, Shield, and more.",
  metadataBase: new URL("https://orza-site.vercel.app"),
  openGraph: {
    title: "Orza — A Mac browser you’ll keep",
    description:
      "Spaces, tree tabs, split panes, Veil, Shield — built for macOS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orza",
    description: "A Mac browser you’ll keep.",
  },
};

const themeBoot = `(function(){try{var k='orza-theme';var p=localStorage.getItem(k);var s=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var t=(p==='light'||p==='dark')?p:(p==='system'||!p)?s:s;var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative flex min-h-full flex-col antialiased">
        <ThemeProvider>
          <SmoothScroll>
            <AmbientBg />
            <Nav />
            <main className="relative z-10 flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
