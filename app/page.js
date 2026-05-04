"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const res = await axios.get(
        "https://api.pokemontcg.io/v2/cards?pageSize=18"
      );
      setCards(res.data.data);
    }
    fetchCards();
  }, []);

  return (
    <main className="bg-gradient-to-br from-black via-purple-950 to-black min-h-screen text-white p-6">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold tracking-wide text-yellow-300 drop-shadow-lg">
          ⚡ POKECARDTRACKER
        </h1>
        <p className="text-gray-400 mt-2">
          Live Pokémon Card Market Tracker
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-10">
        <input
          placeholder="Search Pokémon cards..."
          className="w-full max-w-xl p-3 rounded-xl bg-black/60 border border-purple-500 outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.08 }}
            className="bg-black/60 border border-purple-700 rounded-2xl p-3 shadow-lg shadow-purple-900/30"
          >
            <img
              src={card.images.small}
              className="rounded-xl w-full mb-3"
            />

            <h2 className="font-semibold text-sm">
              {card.name}
            </h2>

            <p className="text-green-400 text-sm">
              £{card.cardmarket?.prices?.averageSellPrice || "N/A"}
            </p>

          </motion.div>
        ))}

      </div>
    </main>
  );
}