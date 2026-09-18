"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const [state, setState] = useState("checking");

  useEffect(() => {
    const verified = searchParams.get("verified");
    const token = searchParams.get("token");
    if (verified !== "true" || !token) {
      setState("cancelled");
      return;
    }
    fetch("/api/check-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((data) => setState(data.valid ? "verified" : "invalid"));
  }, [searchParams]);

  return (
    <main className="screen">
      <div className="card">
        {state === "checking" && <p className="status-msg">Checking…</p>}
        {state === "verified" && <p className="status-msg">✓ Verified — go back to FakeSwap and try again.</p>}
        {state === "invalid" && <p className="status-msg">Token invalid.</p>}
        {state === "cancelled" && <p className="status-msg">Cancelled.</p>}
      </div>
    </main>
  );
}
