"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "yousuf-site-visit-counted";

function formatCount(count: number) {
  return new Intl.NumberFormat("en-US").format(count);
}

function VisitorsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon">
      <path
        fill="currentColor"
        d="M4.2 18.8V10h2.4v8.8H4.2Zm4.7 0V7.2h2.4v11.6H8.9Zm4.7 0v-5.6h2.4v5.6h-2.4Zm4.7 0V4.8H20.7v14H18.3Z"
      />
      <path
        fill="currentColor"
        d="M15.6 3.4h5v5h-1.7V6.3l-4.4 4.4-1.2-1.2 4.4-4.4h-2.1V3.4Z"
      />
    </svg>
  );
}

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const sync = async () => {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";
        const response = await fetch("/api/visitors", {
          method: alreadyCounted ? "GET" : "POST",
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = (await response.json()) as { count?: number };
        if (cancelled || typeof data.count !== "number") return;

        if (!alreadyCounted) {
          sessionStorage.setItem(SESSION_KEY, "1");
        }

        setCount(data.count);
      } catch {
        // Keep footer quiet if the counter is unavailable.
      }
    };

    void sync();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <p className="site-footer__visits" aria-live="polite">
      <VisitorsIcon />
      <span>Visitors: {count === null ? "—" : formatCount(count)}</span>
    </p>
  );
}
