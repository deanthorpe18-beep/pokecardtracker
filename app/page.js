"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [news, setNews] = useState([]);

  // Pokémon cards (market layer - secondary)
  useEffect(() => {
    async function fetchCards() {
      const res = await axios.get(
        "https://api.pokemontcg.io/v2/cards?pageSize=6"
      );
      setCards(res.data.data);
    }
    fetchCards();
  }, []);

  // Fake multi-source news feed (we’ll replace with real RSS engine next step)
  useEffect(() => {
    setNews([
      {
        title: "New Pokémon TCG Set Teased for 2026",
        source: "Pokémon News Network",
      },
      {
        title: "UK Stock Alerts: Booster Boxes Selling Fast",
        source: "TCG Market Watch",
      },
      {
        title: "Rare Card Demand Increasing Worldwide",
        source: "Dex News",
      },
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-6">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-yellow-300">
          ⚡ POKECARDTRACKER
        </h1>
        <p className="text-gray-400 mt-2">
          Live Pokémon Drops • News • Market Intelligence
        </p>
      </div>

      {/* 🔥 LIVE DROPS SECTION */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">
          🔥 Live Drops & Featured Cards
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              className="bg-black/60 border border-purple-700 rounded-xl p-3"
            >
              <img src={card.images.small} className="rounded-lg" />
              <p className="mt-2 font-semibold text-sm">{card.name}</p>
              <p className="text-green-400 text-xs">
                £{card.cardmarket?.prices?.averageSellPrice || "N/A"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📰 NEWS FEED */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">
          📰 Live News Feed
        </h2>

        <div className="space-y-3">
          {news.map((item, i) => (
            <div
              key={i}
              className="bg-black/50 border border-blue-900 p-4 rounded-xl"
            >
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-400 text-sm">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📦 UPCOMING DROPS (STATIC FOR NOW - WILL AUTOMATE NEXT STEP) */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-400 mb-4">
          📦 Upcoming Sets
        </h2>

        <div className="bg-black/50 border border-pink-900 p-4 rounded-xl">
          <p>Scarlet & Violet 151 — Release in 12 days</p>
          <p>Paradox Rift — Coming soon</p>
        </div>
      </section>

      {/* 💰 MARKET (SECONDARY TOOL) */}
      <section>
        <h2 className="text-xl font-semibold text-green-400 mb-4">
          💰 Market Snapshot
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-black/40 border border-green-900 p-3 rounded-xl"
            >
              <p className="text-sm">{card.name}</p>
              <p className="text-green-400 text-xs">
                £{card.cardmarket?.prices?.averageSellPrice || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}