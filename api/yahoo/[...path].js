module.exports = async function handler(req, res) {
  try {
    const rawPath = req.query.path;
    const pathParts = Array.isArray(rawPath)
      ? rawPath
      : rawPath
      ? [rawPath]
      : [];

    if (!pathParts.length) {
      res.status(400).json({ error: "Path inválido." });
      return;
    }

    const upstreamUrl = new URL(`https://query1.finance.yahoo.com/${pathParts.join("/")}`);

    Object.entries(req.query).forEach(([key, value]) => {
      if (key === "path") {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach((item) => upstreamUrl.searchParams.append(key, item));
        return;
      }

      if (typeof value === "string") {
        upstreamUrl.searchParams.append(key, value);
      }
    });

    const upstreamResponse = await fetch(upstreamUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    const responseBody = await upstreamResponse.text();
    const contentType =
      upstreamResponse.headers.get("content-type") ?? "application/json; charset=utf-8";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.status(upstreamResponse.status).send(responseBody);
  } catch (error) {
    res.status(500).json({ error: "Falha ao buscar cotação." });
  }
};