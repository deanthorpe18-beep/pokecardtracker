"use client";

import { useState } from "react";

export default function Home() {

  const [tab, setTab] = useState("home");

  const drops = [
    { name: "Scarlet & Violet 151", date: "2023-09-22", stock: "Low stock in UK" },
    { name: "Paradox Rift", date: "2023-11-03", stock: "Reprints arriving" },
    { name: "Paldean Fates", date: "2024-01-26", stock: "Available in most retailers" }
  ];

  const news = [
    "UK Pokémon stock levels improving this week",
    "New set announcements expected soon",
    "Retailers adjusting booster box allocations"
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #0b1b3a, #000);
          color: white;
        }

        /* TOP BAR */
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
        }

        .logo {
          font-size: 20px;
          font-weight: 900;
          color: #ffcc00;
          letter-spacing: 1px;
        }

        .nav {
          display: flex;
          gap: 14px;
        }

        .nav button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 14px;
          opacity: 0.8;
        }

        .nav button:hover {
          opacity: 1;
          color: #ffcc00;
        }

        /* MAIN */
        .container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
        }

        h2 {
          color: #ffcc00;
          margin-top: 30px;
        }

        /* FEED STYLE (IMPORTANT CHANGE) */
        .item {
          padding: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .meta {
          color: #aaa;
          font-size: 13px;
          margin-top: 4px;
        }

        .tag {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 11px;
          margin-top: 6px;
          background: #3b4cca;
        }
      `}</style>

      {/* TOP NAV */}
      <div className="topbar">
        <div className="logo">⚡ PokéTracker</div>

        <div className="nav">
          <button onClick={() => setTab("home")}>Drops</button>
          <button onClick={() => setTab("news")}>News</button>
          <button onClick={() => setTab("stock")}>Stock</button>
        </div>
      </div>

      <div className="container">

        {/* DROPS = DEFAULT HOME */}
        {tab === "home" && (
          <>
            <h2>🔥 Set Releases</h2>

            {drops.map((d, i) => (
              <div className="item" key={i}>
                <b>{d.name}</b>
                <div className="meta">Release: {d.date}</div>
                <div className="meta">{d.stock}</div>
              </div>
            ))}
          </>
        )}

        {/* NEWS */}
        {tab === "news" && (
          <>
            <h2>📰 News Feed</h2>
            {news.map((n, i) => (
              <div className="item" key={i}>
                {n}
              </div>
            ))}
          </>
        )}

        {/* STOCK */}
        {tab === "stock" && (
          <>
            <h2>📦 Stock Updates</h2>

            <div className="item">
              UK retailers: booster box restocks expected this week
            </div>

            <div className="item">
              Amazon UK: mixed availability on new sets
            </div>
          </>
        )}

      </div>
    </>
  );
}