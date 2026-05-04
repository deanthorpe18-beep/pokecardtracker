"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("home");

  const upcomingSets = [
    { name: "Temporal Forces", date: "2026-02-14", items: "Booster Box • ETB • Blisters" },
    { name: "Prismatic Evolutions", date: "2026-04-03", items: "Booster Box • Premium Collection" },
    { name: "Shadow Zenith", date: "2026-06-18", items: "ETB • Booster Box • Mini Tins" }
  ];

  const stockAlerts = [
    { title: "Paradox Rift Booster Boxes", status: "Low stock in UK retailers" },
    { title: "Paldean Fates ETB", status: "Reprint wave incoming" },
    { title: "151 Booster Bundles", status: "High demand / limited availability" }
  ];

  const news = [
    "UK Pokémon market showing strong demand increase",
    "New set announcements expected soon",
    "Retailers adjusting allocation strategies",
    "Collector demand rising across modern sets"
  ];

  const chaseBySet = [
    {
      set: "Temporal Forces",
      cards: [
        { name: "Charizard ex Alt", price: "£420" },
        { name: "Gengar ex Alt", price: "£210" },
        { name: "Mew ex Gold", price: "£140" },
        { name: "Lugia ex Alt", price: "£260" },
        { name: "Pikachu IR", price: "£180" },
        { name: "Tyranitar ex", price: "£120" },
        { name: "Eevee AR", price: "£95" },
        { name: "Rayquaza ex", price: "£300" }
      ]
    }
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

        /* HEADER AREA */
        .header {
          text-align: center;
          padding: 25px 10px 10px 10px;
        }

        .title {
          font-size: 42px;
          font-weight: 900;
          color: #ffcc00;
          letter-spacing: 1px;
          text-shadow: 0 0 18px rgba(59,76,202,0.6);
        }

        /* NAV */
        .nav {
          margin-top: 10px;
          font-size: 14px;
          opacity: 0.9;
        }

        .nav span {
          cursor: pointer;
          margin: 0 10px;
        }

        .nav span:hover {
          color: #ffcc00;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        h2 {
          color: #ffcc00;
          margin-top: 25px;
        }

        .list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .item {
          padding: 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .small {
          font-size: 13px;
          color: #aaa;
          margin-top: 5px;
        }

        .alert {
          color: #ffcc00;
          font-weight: 600;
        }

        /* GRID FOR CHASE */
        .grid4x2 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 900px) {
          .grid4x2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px;
          border-radius: 12px;
        }

        .price {
          color: #00ff9d;
          font-weight: 700;
          margin-top: 6px;
        }
      `}</style>

      {/* HEADER */}
      <div className="header">
        <div className="title">⚡ PokéTracker</div>

        {/* CLEAN CATEGORY BAR */}
        <div className="nav">
          <span onClick={() => setTab("home")}>Home</span>
          <span>|</span>
          <span onClick={() => setTab("chase")}>Chase Cards</span>
          <span>|</span>
          <span onClick={() => setTab("news")}>News</span>
        </div>
      </div>

      <div className="container">

        {/* HOME */}
        {tab === "home" && (
          <>
            <h2>📅 Upcoming Set Releases</h2>

            <div className="list">
              {upcomingSets.map((s, i) => (
                <div className="item" key={i}>
                  <b>{s.name}</b>
                  <div className="small">Release: {s.date}</div>
                  <div className="small">{s.items}</div>
                </div>
              ))}
            </div>

            <h2>📦 Stock Alerts</h2>

            <div className="list">
              {stockAlerts.map((a, i) => (
                <div className="item" key={i}>
                  <div className="alert">{a.title}</div>
                  <div className="small">{a.status}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CHASE */}
        {tab === "chase" && (
          <>
            <h2>💰 Top 8 Chase Cards</h2>

            {chaseBySet.map((set, i) => (
              <div key={i}>
                <h3 style={{ color: "#3b4cca" }}>{set.set}</h3>

                <div className="grid4x2">
                  {set.cards.map((c, j) => (
                    <div className="card" key={j}>
                      <b>{c.name}</b>
                      <div className="price">{c.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* NEWS PAGE (RESTORED AS REQUESTED) */}
        {tab === "news" && (
          <>
            <h2>📰 Pokémon News</h2>

            <div className="list">
              {news.map((n, i) => (
                <div className="item" key={i}>
                  {n}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </>
  );
}