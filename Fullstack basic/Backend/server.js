import express from "express";
const app = express();

// Corrected template literal usage for the console log message
app.get("/", (req, res) => {
  res.send('server is ready');
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
const jokes = [
  { id: 1, title: "Joke 1", content: "This is joke 1" },
  { id: 2, title: "Joke 2", content: "This is joke 2" },
  { id: 3, title: "Joke 3", content: "This is joke 3" },
  { id: 4, title: "Joke 4", content: "This is joke 4" },
  { id: 5, title: "Joke 5", content: "This is joke 5" }
];
res.send(jokes);
})

const port = process.env.PORT || 3000;

// Fixed template literal syntax
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
