"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [drops] = useState([
    { name: "Scarlet & Violet 151", status: "Upcoming" },
    { name: "Paradox Rift", status: "Released" },
    { name: "Paldean Fates", status: "Released" }
  ]);

  const [news] = useState([
    "Pokémon TCG market is seeing increased UK demand",
    "New set announcements expected soon",
    "Booster box prices fluctuating across retailers"
  ]);

  return (
    <>
      {/* GLOBAL STYLE (NO EXTRA FILES NEEDED) */}
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #0b1b3a, #000, #2a001a);
          color: white;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        /* HEADER */
        .header {
          text-align: center;
          padding: 30px 10px;
        }

        .logo {
          font-size: 32px;
          font-weight: 900;
          color: #ffcc00;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
        }

        .nav a {
          color: white;
          text-decoration: none;
          padding: 6px 12px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
        }

        .nav a:hover {
          border-color: #ffcc00;
          color: #ffcc00;
        }

        /* SECTIONS */
        h2 {
          color: #ffcc00;
          margin-top: 30px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 14px;
          transition: 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: #ffcc00;
        }

        .small {
          color: #aaa;
          font-size: 13px;
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="logo">
            ⚡ PokéTracker
          </div>

          <div style={{ color: "#aaa", marginTop: 5 }}>
            Live Pokémon Drops • News • Market Intelligence
          </div>

          {/* NAVIGATION */}
          <div className="nav">
            <a href="/">Home</a>
            <a href="/app_market_page">Market</a>
          </div>

        </div>

        {/* DROPS */}
        <h2>🔥 Pokémon Drops</h2>

        <div className="grid">
          {drops.map((d, i) => (
            <div className="card" key={i}>
              <b>{d.name}</b>
              <div className="small">{d.status}</div>
            </div>
          ))}
        </div>

        {/* NEWS */}
        <h2>📰 Latest News</h2>

        <div className="grid">
          {news.map((n, i) => (
            <div className="card" key={i}>
              {n}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}