"use client";

import { useEffect } from "react";

/** Registers the service worker (production only, so dev HMR is never cached). */
export default function RegisterServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Installing is a nice-to-have; the site works without it.
    });
  }, []);

  return null;
}
