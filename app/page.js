"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await axios.get(
        "https://api.pokemontcg.io/v2/cards?pageSize=8"
      );
      setCards(res.data.data);
    }

    load();
  }, []);

  return (
    <>
      {/* GLOBAL STYLES (INLINE FIX — NO CSS FILE NEEDED) */}
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #1a0033, #000);
          color: white;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        .title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          color: gold;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 12px;
          transition: 0.2s;
        }

        .card:hover {
          transform: scale(1.05);
          border-color: white;
        }

        img {
          width: 100%;
          border-radius: 10px;
        }

        .price {
          color: lime;
        }
      `}</style>

      <div className="container">

        <div className="title">
          ⚡ Pokecardtracker
        </div>

        <p style={{ textAlign: "center", color: "#aaa" }}>
          Live Pokémon Drops • News • Market
        </p>

        <div className="grid">
          {cards.map((c) => (
            <div key={c.id} className="card">
              <img src={c.images.small} />
              <p>{c.name}</p>
              <p className="price">
                £{c.cardmarket?.prices?.averageSellPrice || "N/A"}
              </p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}