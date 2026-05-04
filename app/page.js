"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("dashboard");

  const stats = [
    { label: "Active Sets", value: "12", color: "#3b4cca" },
    { label: "Upcoming Drops", value: "3", color: "#ffcc00" },
    { label: "Trending Cards", value: "8", color: "#ff3b3b" }
  ];

  const drops = [
    { name: "Scarlet & Violet 151", status: "Upcoming", tag: "HOT" },
    { name: "Paradox Rift", status: "Live", tag: "ACTIVE" },
    { name: "Paldean Fates", status: "Released", tag: "STABLE" }
  ];

  const news = [
    "UK Pokémon market demand rising sharply",
    "New Japanese set leak circulating",
    "Booster box prices fluctuating across retailers"
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: #050914;
          color: white;
        }

        .layout {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .sidebar {
          width: 220px;
          background: #0b1024;
          padding: 20px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }

        .brand {
          font-size: 22px;
          font-weight: 900;
          color: #ffcc00;
          margin-bottom: 20px;
        }

        .navbtn {
          display: block;
          width: 100%;
          margin: 8px 0;
          padding: 10px;
          border-radius: 10px;
          border: none;
          background: rgba(255,255,255,0.05);
          color: white;
          text-align: left;
          cursor: pointer;
        }

        .navbtn:hover {
          background: rgba(255,204,0,0.15);
        }

        /* MAIN */
        .main {
          flex: 1;
          padding: 30px;
        }

        h1 {
          font-size: 32px;
          color: #ffcc00;
          margin-bottom: 20px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        /* CARD */
        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 14px;
        }

        .tag {
          display: inline-block;
          padding: 2px 8px;
          font-size: 11px;
          border-radius: 999px;
          background: #ffcc00;
          color: black;
          margin-top: 6px;
        }

        .stat {
          font-size: 26px;
          font-weight: 800;
        }

        .label {
          color: #aaa;
          font-size: 13px;
        }
      `}</style>

      <div className="layout">

        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="brand">⚡ PokéTracker</div>

          <button className="navbtn" onClick={() => setPage("dashboard")}>
            Dashboard
          </button>

          <button className="navbtn" onClick={() => setPage("drops")}>
            Drops
          </button>

          <button className="navbtn" onClick={() => setPage("market")}>
            Market
          </button>

          <button className="navbtn" onClick={() => setPage("news")}>
            News
          </button>
        </div>

        {/* MAIN */}
        <div className="main">

          {page === "dashboard" && (
            <>
              <h1>Dashboard</h1>

              <div className="grid">
                {stats.map((s, i) => (
                  <div className="card" key={i}>
                    <div className="stat" style={{ color: s.color }}>
                      {s.value}
                    </div>
                    <div className="label">{s.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {page === "drops" && (
            <>
              <h1>Drops</h1>
              {drops.map((d, i) => (
                <div className="card" key={i}>
                  <b>{d.name}</b>
                  <div>{d.status}</div>
                  <div className="tag">{d.tag}</div>
                </div>
              ))}
            </>
          )}

          {page === "market" && (
            <>
              <h1>Market</h1>
              <div className="card">Charizard EX trending upward</div>
              <div className="card">Umbreon cards increasing demand</div>
            </>
          )}

          {page === "news" && (
            <>
              <h1>News</h1>
              {news.map((n, i) => (
                <div className="card" key={i}>{n}</div>
              ))}
            </>
          )}

        </div>
      </div>
    </>
  );
}