import type { Metadata, Viewport } from "next";
import RegisterServiceWorker from "./register-sw";
import "./globals.css";

export const metadata: Metadata = {
  title: "SST Smartphone",
  description: "Pick a scene.",
  manifest: "/manifest.webmanifest",
  // "black-translucent": an installed app draws its content under the iPhone
  // status bar, so the camera scene fills the whole screen.
  appleWebApp: { capable: true, title: "SST4", statusBarStyle: "black-translucent" },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        {children}
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
