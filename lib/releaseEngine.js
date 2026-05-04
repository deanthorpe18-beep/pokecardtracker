export async function getReleases() {
  try {
    const res = await fetch("https://api.pokemontcg.io/v2/sets");
    const data = await res.json();

    const today = new Date();

    return data.data.slice(0, 5).map((set) => {
      const release = new Date(set.releaseDate);
      const diff = Math.ceil((release - today) / (1000 * 60 * 60 * 24));

      return {
        name: set.name,
        releaseDate: set.releaseDate,
        daysLeft: diff,
        series: set.series
      };
    });

  } catch (e) {
    return [
      {
        name: "System fallback set",
        releaseDate: "2026-01-01",
        daysLeft: 999
      }
    ];
  }
}