const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/api/topics", (req, res) => {
  const { search, sort } = req.query;

  try {
    const filePath = path.join(__dirname, "../data/topics.json");
    const rawData = fs.readFileSync(filePath);
    let topics = JSON.parse(rawData);

    // If search query is missing, return all topics; otherwise filter
    let filtered;
    if (!search) {
      filtered = topics;
    } else {
      // Filter topics by name (case-insensitive)
      filtered = topics.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Bonus: Sorting by name
    if (sort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return res.status(200).json(filtered);

  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
