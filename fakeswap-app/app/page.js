"use client";

import { useState } from "react";

export default function SwapPage() {
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("");

  function handleVerifyClick() {
    // Intentionally does nothing yet — this is the last piece we wire
    // up, once FakeSwap is deployed and working on its own.
    setMessage("Not wired up yet — this is step 3.");
  }

  function handleConfirmSwap() {
    setMessage("Swap confirmed! (this is a fake swap, nothing actually moved)");
  }

  return (
    <main className="screen">
      <div className="card">
        <div className="brand">
          <div className="brand-mark">FS</div>
          <span className="brand-name">FakeSwap</span>
        </div>

        <div className="field">
          <div className="field-label">You pay</div>
          <div className="field-row">
            <span className="field-amount">100</span>
            <span className="field-token">USDC</span>
          </div>
        </div>

        <div className="swap-arrow"><span>↓</span></div>

        <div className="field">
          <div className="field-label">You receive</div>
          <div className="field-row">
            <span className="field-amount">0.041</span>
            <span className="field-token">ETH</span>
          </div>
        </div>

        <p className="rate">1 ETH ≈ 2,439 USDC</p>

        {!verified && (
          <div className="lock-banner">
            <span className="lock-icon">🔒</span>
            <span className="lock-text">Identity verification required to trade on FakeSwap.</span>
          </div>
        )}

        {verified ? (
          <button className="btn btn-primary" onClick={handleConfirmSwap}>
            Confirm Swap
          </button>
        ) : (
          <>
            <button className="btn btn-locked" disabled>
              Confirm Swap
            </button>
            <button className="btn btn-verify" onClick={handleVerifyClick}>
              Verify with OneKYC
            </button>
          </>
        )}

        {message && <p className="status-msg">{message}</p>}
      </div>
    </main>
  );
}
