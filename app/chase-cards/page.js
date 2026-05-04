"use client";

import { useEffect, useState } from "react";

export default function ChaseCards() {
  const [sets, setSets] = useState({});

  useEffect(() => {
    async function load() {
      const res = await fetch("https://api.pokemontcg.io/v2/sets", {
        headers: {
          "X-Api-Key": process.env.POKEMON_API_KEY,
        },
      });

      const data = await res.json();

      const sorted = data.data.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );

      const limited = sorted.slice(0, 6);

      const result = {};

      for (const set of limited) {
        const cardRes = await fetch(
          `https://api.pokemontcg.io/v2/cards?q=set.id:${set.id}`,
          {
            headers: {
              "X-Api-Key": process.env.POKEMON_API_KEY,
            },
          }
        );

        const cardData = await cardRes.json();

        result[set.id] = cardData.data.slice(0, 8);
      }

      setSets({ order: limited, data: result });
    }

    load();
  }, []);

  const order = sets.order || [];
  const data = sets.data || {};

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: radial-gradient(circle at top, #1a237e, #000);
          color: white;
        }

        .header {
          text-align: center;
          padding: 25px;
          background: linear-gradient(90deg, #ffcb05, #3b4cca);
        }

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

        .card {
          background: rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 10px;
          text-align: center;
        }

        .card img {
          width: 100%;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        h2 {
          color: #ffcb05;
        }
      `}</style>

      <div className="header">
        <h1>💰 Chase Cards</h1>
        <a href="/" style={{color:"white"}}>Home</a>
      </div>

      <div className="container">

        {order.map((set) => (
          <div key={set.id}>
            <h2>{set.name}</h2>

            <div className="grid">
              {(data[set.id] || []).map((card) => (
                <div className="card" key={card.id}>
                  <img src={card.images.small} />
                  <div>{card.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </>
  );
}