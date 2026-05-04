"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("drops");

  const drops = [
    {
      name: "Scarlet & Violet 151",
      date: "2023-09-22",
      stock: "Low UK stock",
      img: "https://images.pokemontcg.io/sv3/4_hires.png"
    },
    {
      name: "Paradox Rift",
      date: "2023-11-03",
      stock: "Reprints incoming",
      img: "https://images.pokemontcg.io/sv4/1_hires.png"
    },
    {
      name: "Paldean Fates",
      date: "2024-01-26",
      stock: "Widely available",
      img: "https://images.pokemontcg.io/sv4pt5/12_hires.png"
    }
  ];

  const news = [
    "UK Pokémon stock improving across major retailers",
    "New set leaks suggest upcoming reprint wave",
    "Booster box demand increasing in Europe"
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
          padding: 16px 22px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .logo {
          font-size: 20px;
          font-weight: 900;
          color: #ffcc00;
        }

        .nav button {
          background: none;
          border: none;
          color: white;
          margin-left: 12px;
          cursor: pointer;
          opacity: 0.7;
        }

        .nav button:hover {
          opacity: 1;
          color: #ffcc00;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 20px;
        }

        h2 {
          color: #ffcc00;
          margin-top: 30px;
        }

        /* CARD GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        /* BIG VISUAL CARD */
        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: 0.25s;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: #ffcc00;
        }

        .card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .card-content {
          padding: 12px;
        }

        .tag {
          display: inline-block;
          padding: 2px 8px;
          font-size: 11px;
          border-radius: 999px;
          background: #3b4cca;
          margin-top: 6px;
        }

        .meta {
          color: #aaa;
          font-size: 13px;
          margin-top: 4px;
        }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="logo">⚡ PokéTracker</div>

        <div className="nav">
          <button onClick={() => setTab("drops")}>Drops</button>
          <button onClick={() => setTab("news")}>News</button>
          <button onClick={() => setTab("stock")}>Stock</button>
        </div>
      </div>

      <div className="container">

        {/* DROPS */}
        {tab === "drops" && (
          <>
            <h2>🔥 Set Releases</h2>

            <div className="grid">
              {drops.map((d, i) => (
                <div className="card" key={i}>
                  <img src={d.img} />
                  <div className="card-content">
                    <b>{d.name}</b>

                    <div className="meta">
                      Release: {d.date}
                    </div>

                    <div className="meta">
                      {d.stock}
                    </div>

                    <div className="tag">POKÉMON SET</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* NEWS */}
        {tab === "news" && (
          <>
            <h2>📰 News Feed</h2>

            <div className="grid">
              {news.map((n, i) => (
                <div className="card" key={i}>
                  <div className="card-content">
                    {n}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STOCK */}
        {tab === "stock" && (
          <>
            <h2>📦 Stock Updates</h2>

            <div className="grid">
              <div className="card">
                <div className="card-content">
                  UK: Booster boxes low stock across major retailers
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  Amazon UK: intermittent restocks detected
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </>
  );
}