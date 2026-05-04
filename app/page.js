"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [sets, setSets] = useState([]);
  const [chase, setChase] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("https://api.pokemontcg.io/v2/sets", {
          headers: {
            "X-Api-Key": process.env.POKEMON_API_KEY,
          },
        });

        const data = await res.json();
        const today = new Date();

        // Filter recent + upcoming sets
        const filtered = data.data.filter((set) => {
          const release = new Date(set.releaseDate);
          const diffDays = (today - release) / (1000 * 60 * 60 * 24);
          return diffDays < 120;
        });

        const sorted = filtered.sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );

        setSets(sorted);

        // Load chase cards from newest set
        if (sorted.length > 0) {
          const setId = sorted[0].id;

          const cardRes = await fetch(
            `https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`,
            {
              headers: {
                "X-Api-Key": process.env.POKEMON_API_KEY,
              },
            }
          );

          const cardData = await cardRes.json();

          const top8 = cardData.data
            .filter((c) => c.images?.small)
            .slice(0, 8);

          setChase(top8);
        }

      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #1a237e, #000);
          color: white;
        }

        .header {
          text-align: center;
          padding: 30px 10px;
          background: linear-gradient(90deg, #ffcb05, #3b4cca);
          box-shadow: 0 0 25px rgba(255, 203, 5, 0.3);
        }

        .title {
          font-size: 52px;
          font-family: 'Bungee', system-ui;
          color: white;
          text-shadow: 3px 3px #2a75bb;
        }

        .nav {
          margin-top: 8px;
          color: white;
          font-weight: 600;
          opacity: 0.9;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        h2 {
          color: #ffcb05;
          margin-top: 30px;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 800px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* CARD STYLE */
        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,203,5,0.2);
          border-radius: 14px;
          padding: 10px;
          text-align: center;
          transition: 0.2s;
        }

        .card:hover {
          transform: scale(1.03);
          border-color: #ffcb05;
        }

        .card img {
          width: 100%;
          border-radius: 10px;
        }

        .sets {
          margin-top: 20px;
        }

        .setItem {
          display: flex;
          gap: 15px;
          align-items: center;
          padding: 14px;
          margin-bottom: 10px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,203,5,0.15);
        }

        .setItem img {
          width: 80px;
        }

        .meta {
          color: #aaa;
          font-size: 13px;
        }

        .price {
          color: #00ff9d;
          font-weight: bold;
        }
      `}</style>

      {/* HEADER */}
      <div className="header">
        <div className="title">PokéTracker</div>
        <div className="nav">SETS | STOCK | CHASE CARDS | NEWS</div>
      </div>

      <div className="container">

        {/* CHASE CARDS */}
        <h2>💰 Top 8 Chase Cards</h2>

        <div className="grid">
          {chase.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.images.small} />
              <div>{card.name}</div>
            </div>
          ))}
        </div>

        {/* SETS */}
        <h2>📅 Upcoming & Recent Sets</h2>

        <div className="sets">
          {sets.map((set) => (
            <div className="setItem" key={set.id}>
              <img src={set.images.logo} />

              <div>
                <b>{set.name}</b>

                <div className="meta">
                  Release: {new Date(set.releaseDate).toLocaleDateString('en-GB')}
                </div>

                <div className="meta">{set.series}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}