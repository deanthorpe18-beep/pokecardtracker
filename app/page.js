"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("home");

  /* ---------------- UPCOMING SETS ---------------- */
  const upcomingSets = [
    {
      name: "Temporal Forces",
      date: "2026-02-14",
      items: "Booster Box • ETB • Blisters"
    },
    {
      name: "Prismatic Evolutions",
      date: "2026-04-03",
      items: "Booster Box • Premium Collection"
    },
    {
      name: "Shadow Zenith",
      date: "2026-06-18",
      items: "ETB • Booster Box • Mini Tins"
    }
  ];

  /* ---------------- STOCK ALERTS (NEW FOCUS) ---------------- */
  const stockAlerts = [
    {
      title: "Paradox Rift Booster Boxes",
      status: "⚠️ Low stock in UK retailers"
    },
    {
      title: "Paldean Fates ETB",
      status: "📦 Reprint wave arriving soon"
    },
    {
      title: "151 Booster Bundles",
      status: "🔥 High demand, intermittent availability"
    }
  ];

  /* ---------------- CHASE CARDS ---------------- */
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
    },
    {
      set: "Prismatic Evolutions",
      cards: [
        { name: "Umbreon VMAX Alt", price: "£310" },
        { name: "Espeon V Alt", price: "£170" },
        { name: "Sylveon ex", price: "£160" },
        { name: "Glaceon VMAX", price: "£150" },
        { name: "Leafeon V", price: "£120" },
        { name: "Flareon ex", price: "£110" },
        { name: "Vaporeon AR", price: "£90" },
        { name: "Jolteon AR", price: "£95" }
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

        .topbar {
          display: flex;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(0,0,0,0.6);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          position: sticky;
          top: 0;
        }

        .logo {
          font-weight: 900;
          color: #ffcc00;
        }

        .nav button {
          background: none;
          border: none;
          color: white;
          margin-left: 12px;
          cursor: pointer;
        }

        .nav button:hover {
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
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
        }

        .small {
          color: #aaa;
          font-size: 13px;
          margin-top: 5px;
        }

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

        .alert {
          color: #ffcc00;
          font-weight: 600;
        }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="logo">⚡ PokéTracker</div>

        <div className="nav">
          <button onClick={() => setTab("home")}>Home</button>
          <button onClick={() => setTab("chase")}>Top Chase Cards</button>
        </div>
      </div>

      <div className="container">

        {/* ---------------- HOME ---------------- */}
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

        {/* ---------------- CHASE ---------------- */}
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

      </div>
    </>
  );
}