"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  const drops = [
    { name: "Scarlet & Violet 151", status: "Upcoming", color: "#ffcc00" },
    { name: "Paradox Rift", status: "Released", color: "#3b4cca" },
    { name: "Paldean Fates", status: "Released", color: "#ff3b3b" }
  ];

  const news = [
    "Pokémon TCG demand rising in UK markets",
    "New set announcements expected soon",
    "Booster box prices fluctuating across retailers"
  ];

  const renderHome = () => (
    <>
      <h2>🔥 Pokémon Drops</h2>
      {drops.map((d, i) => (
        <div className="card" key={i}>
          <b>{d.name}</b>
          <div style={{ color: d.color, marginTop: 5 }}>
            {d.status}
          </div>
        </div>
      ))}

      <h2>📰 News</h2>
      {news.map((n, i) => (
        <div className="card" key={i}>{n}</div>
      ))}
    </>
  );

  const renderMarket = () => (
    <>
      <h2>💰 Market Trends</h2>
      <div className="card">Charizard EX trending upward</div>
      <div className="card">Pikachu cards stabilising</div>
      <div className="card">Umbreon cards increasing in value</div>
    </>
  );

  return (
    <>
      {/* GLOBAL STYLE */}
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #0b1b3a, #000000 70%, #2a001a);
          color: white;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 20px;
        }

        /* HEADER */
        h1 {
          text-align: center;
          font-size: 42px;
          font-weight: 900;
          color: #ffcc00;
          text-shadow: 0 0 12px #3b4cca;
          margin-bottom: 10px;
        }

        /* NAV */
        .nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .nav button {
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid #3b4cca;
          background: rgba(59, 76, 202, 0.15);
          color: white;
          cursor: pointer;
          transition: 0.2s;
        }

        .nav button:hover {
          border-color: #ffcc00;
          transform: translateY(-2px);
        }

        /* HEADINGS */
        h2 {
          color: #ffcc00;
          border-left: 4px solid #3b4cca;
          padding-left: 10px;
          margin-top: 25px;
        }

        /* CARDS */
        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 14px;
          margin: 10px 0;
          backdrop-filter: blur(8px);
          transition: 0.2s;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: #ffcc00;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
        }
      `}</style>

      <div className="container">

        <h1>⚡ PokéTracker</h1>

        {/* NAV */}
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