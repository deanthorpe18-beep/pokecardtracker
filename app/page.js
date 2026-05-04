"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [news, setNews] = useState([]);
  const [releases, setReleases] = useState([]);

  // 🔄 AUTO REFRESH (every 5 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  // 📦 LOAD DATA
  useEffect(() => {
    async function load() {
      try {
        // 🃏 Cards (market layer)
        const cardRes = await axios.get(
          "https://api.pokemontcg.io/v2/cards?pageSize=6"
        );
        setCards(cardRes.data.data);

        // 📰 NEWS (temporary real simulation until RSS parser upgrade)
        setNews([
          {
            title: "Pokémon TCG market showing strong activity",
            source: "Live Feed Engine"
          },
          {
            title: "New set announcements expected soon",
            source: "PokéCardTracker"
          },
          {
            title: "UK stock levels fluctuating across retailers",
            source: "Market Watch"
          }
        ]);

        // 📦 RELEASES (real API-based structure)
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
            releaseDate: set.releaseDate,
            daysLeft: diff
          };
        });

        setReleases(formatted);

      } catch (err) {
        console.log(err);
      }
    }

    load();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">

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
      <section className="mb-12">
        <h2 className="text-yellow-400 text-xl mb-4">
          🔥 Live Drops & Releases
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {releases.map((r, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-yellow-500 p-4 rounded-xl"
            >
              <p className="font-bold">{r.name}</p>
              <p className="text-sm text-gray-400">{r.series}</p>
              <p className="text-green-400 text-sm mt-1">
                ⏳ {r.daysLeft} days left
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 📰 NEWS */}
      <section className="mb-12">
        <h2 className="text-blue-400 text-xl mb-4">
          📰 Live News Feed
        </h2>

        <div className="space-y-3">
          {news.map((n, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-blue-600 p-4 rounded-xl"
            >
              <p>{n.title}</p>
              <p className="text-xs text-gray-500">{n.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 MARKET (SECONDARY) */}
      <section>
        <h2 className="text-green-400 text-xl mb-4">
          💰 Market Snapshot
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div
              key={c.id}
              className="bg-zinc-900 border border-green-600 p-3 rounded-xl"
            >
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