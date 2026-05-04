"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [news, setNews] = useState([]);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        // 🃏 CARDS
        const cardRes = await axios.get(
          "https://api.pokemontcg.io/v2/cards?pageSize=6"
        );
        setCards(cardRes.data.data);

        // 📰 NEWS (temporary live feed simulation)
        setNews([
          {
            title: "New Pokémon TCG activity detected across markets",
            source: "PokéCardTracker Feed"
          },
          {
            title: "UK booster box demand increasing this week",
            source: "Market Watch"
          },
          {
            title: "New set announcements expected soon",
            source: "Industry Feed"
          }
        ]);

        // 📦 RELEASES (real API-based sets)
        const setRes = await axios.get(
          "https://api.pokemontcg.io/v2/sets"
        );

        const today = new Date();

        const formatted = setRes.data.data.slice(0, 5).map((set) => {
          const release = new Date(set.releaseDate);
          const diff = Math.ceil(
            (release - today) / (1000 * 60 * 60 * 24)
          );

          return {
            name: set.name,
            series: set.series,
            daysLeft: diff
          };
        });

        setReleases(formatted);

      } catch (err) {
        console.log(err);
      }
    }

    load();

    // 🔄 auto refresh (keeps feed “alive”)
    const interval = setInterval(() => {
      window.location.reload();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>

      {/* HEADER */}
      <h1>⚡ Pokecardtracker</h1>
      <p style={{ textAlign: "center", color: "#aaa" }}>
        Live Pokémon Drops • News • Market Intelligence
      </p>

      {/* 🔥 DROPS */}
      <h2>🔥 Live Drops</h2>

      <div className="grid">
        {releases.map((r, i) => (
          <div key={i} className="card">
            <p><b>{r.name}</b></p>
            <p style={{ color: "#aaa" }}>{r.series}</p>
            <p style={{ color: "lime" }}>
              ⏳ {r.daysLeft} days left
            </p>
          </div>
        ))}
      </div>

      {/* 📰 NEWS */}
      <h2>📰 Live News Feed</h2>

      <div className="grid">
        {news.map((n, i) => (
          <div key={i} className="card">
            <p>{n.title}</p>
            <p style={{ fontSize: 12, color: "#777" }}>
              {n.source}
            </p>
          </div>
        ))}
      </div>

      {/* 💰 MARKET */}
      <h2>💰 Market Snapshot</h2>

      <div className="grid">
        {cards.map((c) => (
          <div key={c.id} className="card">
            <p>{c.name}</p>
            <p style={{ color: "lime" }}>
              £{c.cardmarket?.prices?.averageSellPrice || "N/A"}
            </p>
          </div>
        ))}
      </div>

    </main>
  );
}