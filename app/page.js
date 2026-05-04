"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [news] = useState([
    "New Pokémon set announcements expected soon",
    "UK booster box demand rising this week",
    "TCG market showing strong movement"
  ]);

  const [drops] = useState([
    { name: "Scarlet & Violet 151", date: "Add to calendar" },
    { name: "Paradox Rift", date: "Add to calendar" },
    { name: "Paldean Fates", date: "Add to calendar" }
  ]);

  return (
    <>
      {/* PAGE STYLES (NO OTHER FILES NEEDED) */}
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: linear-gradient(180deg, #0b1b3a, #000, #2a001a);
          color: white;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 20px;
        }

        /* HEADER */
        .header {
          text-align: center;
          padding: 30px 10px;
        }

        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .ball {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(circle at top, #ff0000, #7a0000);
          border: 3px solid #ffcc00;
          box-shadow: 0 0 15px rgba(255,0,0,0.6);
        }

        .title {
          font-size: 28px;
          font-weight: 900;
          color: #ffcc00;
        }

        .subtitle {
          color: #aaa;
          font-size: 13px;
          margin-top: 6px;
        }

        /* SECTIONS */
        h2 {
          color: #ffcc00;
          margin-top: 30px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        /* CARD */
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

        button {
          margin-top: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          border: none;
          background: #ffcc00;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="logo">
            <div className="ball"></div>
            <div className="title">PokéTracker</div>
          </div>

          <div className="subtitle">
            Live Pokémon Drops • News • Market Intelligence
          </div>

        </div>

        {/* DROPS */}
        <h2>🔥 Pokémon Drops</h2>
        <div className="grid">
          {drops.map((d, i) => (
            <div className="card" key={i}>
              <b>{d.name}</b>
              <div className="small">{d.date}</div>
              <button>Add to Calendar</button>
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