"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const res = await axios.get(
        "https://api.pokemontcg.io/v2/cards?pageSize=12"
      );
      setCards(res.data.data);
    }
    fetchCards();
  }, []);

  return (
    <main style={{ background: "#0a0a0f", color: "white", minHeight: "100vh", padding: "20px" }}>
      
      <h1 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "20px" }}>
        ⚡ Pokecardtracker
      </h1>

      <input
        placeholder="Search Pokémon cards..."
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "30px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.08 }}
            style={{
              background: "#111",
              borderRadius: "15px",
              padding: "10px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              textAlign: "center"
            }}
          >
            <img src={card.images.small} style={{ width: "100%" }} />
            <h3>{card.name}</h3>
            <p>
              £{card.cardmarket?.prices?.averageSellPrice || "N/A"}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}