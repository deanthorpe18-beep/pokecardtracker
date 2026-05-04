export async function getReleases() {
  const today = new Date();

  return [
    {
      name: "Scarlet & Violet 151",
      status: "🔥 ACTIVE DROP",
      releaseDate: "2026-09-22",
      countdownDays: 12
    },
    {
      name: "Paradox Rift",
      status: "📦 UPCOMING",
      releaseDate: "2026-11-03",
      countdownDays: 58
    }
  ];
}