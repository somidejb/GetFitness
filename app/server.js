// server.js
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/exercises", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/exercises/endpoint"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
