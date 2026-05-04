"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [news, setNews] = useState([]);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    async function load() {
      const cardRes = await axios.get(
        "https://api.pokemontcg.io/v2/cards?pageSize=6"
      );
      setCards(cardRes.data.data);

      setNews([
        { title: "Live Pokémon news system active", source: "Engine" },
        { title: "New set activity increasing in UK market", source: "Tracker" }
      ]);

      setReleases([
        { name: "Scarlet & Violet 151", status: "🔥 LIVE DROP", days: 12 },
        { name: "Paradox Rift", status: "📦 UPCOMING", days: 58 }
      ]);
    }

    load();
  }, []);

  return (
    <main className="min-h-screen text-white bg-black px-6 py-8">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-yellow-300">
          ⚡ POKECARDTRACKER
        </h1>
        <p className="text-gray-400">
          Live Pokémon Intelligence Feed
        </p>
      </div>

      {/* 🔥 DROPS */}
      <section className="mb-10">
        <h2 className="text-yellow-400 text-xl mb-4">🔥 Live Drops</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {releases.map((r, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl border border-yellow-500">
              <p className="font-bold">{r.name}</p>
              <p className="text-sm text-gray-400">{r.status}</p>
              <p className="text-green-400 text-sm">⏳ {r.days} days</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📰 NEWS */}
      <section className="mb-10">
        <h2 className="text-blue-400 text-xl mb-4">📰 Live News Feed</h2>

        <div className="space-y-3">
          {news.map((n, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl border border-blue-600">
              <p>{n.title}</p>
              <p className="text-xs text-gray-500">{n.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 MARKET (SECONDARY) */}
      <section>
        <h2 className="text-green-400 text-xl mb-4">💰 Market Snapshot</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.id} className="bg-zinc-900 p-3 rounded-xl border border-green-600">
              <p className="text-sm">{c.name}</p>
              <p className="text-green-400 text-sm">
                £{c.cardmarket?.prices?.averageSellPrice || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}