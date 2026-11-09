import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";
import manropeLatin400 from "@fontsource/manrope/files/manrope-latin-400-normal.woff2?url";
import manropeLatin500 from "@fontsource/manrope/files/manrope-latin-500-normal.woff2?url";
import manropeLatin600 from "@fontsource/manrope/files/manrope-latin-600-normal.woff2?url";
import manropeLatinExt400 from "@fontsource/manrope/files/manrope-latin-ext-400-normal.woff2?url";
import manropeLatinExt500 from "@fontsource/manrope/files/manrope-latin-ext-500-normal.woff2?url";
import manropeLatinExt600 from "@fontsource/manrope/files/manrope-latin-ext-600-normal.woff2?url";

const APP_NAME = "MAGNET BMW";

const fontPreloads = [
  manropeLatin400,
  manropeLatin500,
  manropeLatin600,
  manropeLatinExt400,
  manropeLatinExt500,
  manropeLatinExt600,
].map((href) => ({
  rel: "preload" as const,
  href,
  as: "font" as const,
  type: "font/woff2",
  crossOrigin: "anonymous" as const,
}));

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: "Autoservis MAGNET BMW v Jablonci nad Nisou. Komplexní servis a údržba vozů BMW. Z lásky k automobilům." },
      { name: "theme-color", content: "#0A0A0A" },
    ],
    links: [
      ...fontPreloads,
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "canonical", href: "https://www.magnetbmw.cz/" },
    ],
  }),
  component: () => (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
