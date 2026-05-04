"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [sets, setSets] = useState([]);

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

        // Keep upcoming + recent sets
        const filtered = data.data.filter((set) => {
          const release = new Date(set.releaseDate);
          return release >= new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        });

        const sorted = filtered.sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );

        setSets(sorted);

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
        }

        .title {
          font-size: 52px;
          font-family: 'Bungee', system-ui;
          color: white;
          text-shadow: 3px 3px #2a75bb;
        }

        .nav {
          margin-top: 10px;
        }

        .nav a {
          color: white;
          text-decoration: none;
          margin: 0 10px;
          font-weight: 600;
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
      `}</style>

      {/* HEADER */}
      <div className="header">
        <div className="title">PokéTracker</div>

        <div className="nav">
          <a href="/">Home</a>
          <a href="/chase-cards">Chase Cards</a>
        </div>
      </div>

      <div className="container">

        <h2>📅 Upcoming & Recent Sets</h2>

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
    </>
  );
}