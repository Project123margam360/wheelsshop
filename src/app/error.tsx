"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="mb-4 text-2xl font-bold text-charcoal-800">
        Something went wrong!
      </h2>
      <p className="mb-6 text-charcoal-500">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-safety-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-safety-orange-600"
      >
        Try Again
      </button>
    </div>
  );
}
