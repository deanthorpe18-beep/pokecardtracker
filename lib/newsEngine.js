export async function getNews() {
  try {
    const feeds = [
      "https://www.pokebeach.com/feed",
      "https://www.serebii.net/news.xml"
    ];

    const responses = await Promise.all(
      feeds.map(async (url) => {
        const res = await fetch(url, {
          headers: {
            "User-Agent": "PokecardTrackerBot/1.0"
          }
        });
        return await res.text();
      })
    );

    // VERY SIMPLE PARSING (we improve later with XML parser)
    const headlines = [];

    responses.forEach((xml) => {
      const matches = xml.match(/<title>(.*?)<\/title>/g);
      if (matches) {
        matches.slice(1, 6).forEach((m) => {
          headlines.push({
            title: m.replace("<title>", "").replace("</title>", ""),
            source: "RSS Feed"
          });
        });
      }
    });

    return headlines.length
      ? headlines
      : [
          {
            title: "Live feed running (no articles parsed yet)",
            source: "System"
          }
        ];

  } catch (e) {
    return [
      {
        title: "News engine offline - fallback mode",
        source: "System"
      }
    ];
  }
}