"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  const renderHome = () => (
    <>
      <h2>🔥 Pokémon Drops</h2>
      <div className="card">Scarlet & Violet 151</div>
      <div className="card">Paradox Rift</div>

      <h2>📰 News</h2>
      <div className="card">New set announcements incoming</div>
      <div className="card">UK market demand increasing</div>
    </>
  );

  const renderMarket = () => (
    <>
      <h2>💰 Market Trends</h2>
      <div className="card">Charizard EX - trending up</div>
      <div className="card">Pikachu cards stabilising</div>
    </>
  );

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #0b1b3a, #000);
          color: white;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 20px;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin: 20px 0;
        }

        .nav button {
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #444;
          background: #111;
          color: white;
          cursor: pointer;
        }

        .nav button:hover {
          border-color: #ffcc00;
        }

        .card {
          background: rgba(255,255,255,0.06);
          padding: 12px;
          margin: 10px 0;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        h2 {
          color: #ffcc00;
        }
      `}</style>

      <div className="container">

        <h1 style={{ textAlign: "center", color: "#ffcc00" }}>
          ⚡ PokéTracker
        </h1>

        {/* NAVIGATION (NO ROUTES NEEDED) */}
        <div className="nav">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("market")}>Market Trends</button>
        </div>

        {/* PAGE CONTENT */}
        {page === "home" && renderHome()}
        {page === "market" && renderMarket()}

      </div>
    </>
  );
}