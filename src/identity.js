import { basePath } from "./i18n.js";

export const ECHOAI_BRAND = "/media/echoai/brand";
export const RXLABS_BRAND = "/media/rxlabs/brand";
export const ECHOAI_MODELS = "/media/echoai/models";

// Shared by the SPA and generated HTML: direct visits and navigation agree.
export function identityFor(pathname) {
  const path = basePath(pathname).replace(/\/+$/, "") || "/";
  const echo = path === "/echoai" || path === "/docs/echoai" ||
    path.startsWith("/docs/echoai/") || path === "/articulos" ||
    path.startsWith("/articulos/");
  return echo ? [
    { rel: "icon", href: `${ECHOAI_BRAND}/favicon.ico`, type: "image/x-icon", sizes: "16x16 32x32 48x48" },
    { rel: "icon", href: `${ECHOAI_BRAND}/echoai-32.png`, type: "image/png", sizes: "32x32" },
    { rel: "icon", href: `${ECHOAI_BRAND}/echoai-16.png`, type: "image/png", sizes: "16x16" },
    { rel: "apple-touch-icon", href: `${ECHOAI_BRAND}/echoai-180.png`, sizes: "180x180" },
  ] : [
    { rel: "icon", href: `${RXLABS_BRAND}/favicon.ico`, type: "image/x-icon", sizes: "16x16 32x32 48x48" },
    { rel: "icon", href: `${RXLABS_BRAND}/rxlabs-32.png`, type: "image/png", sizes: "32x32" },
    { rel: "icon", href: `${RXLABS_BRAND}/rxlabs-16.png`, type: "image/png", sizes: "16x16" },
    { rel: "apple-touch-icon", href: `${RXLABS_BRAND}/rxlabs-180.png`, sizes: "180x180" },
  ];
}
