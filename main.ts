import { mkdirSync, writeFileSync } from "node:fs";

// Pun: "perfect pair" — socks come in pairs, and a "perfect pair" is also a flawless match.
const joke =
  "I told my socks they were a perfect pair, and now they refuse to split up even in the laundry.";

if (joke.trim().length === 0) {
  throw new Error("Joke must not be empty or whitespace only.");
}
if (joke.length > 200) {
  throw new Error(`Joke is ${joke.length} characters, exceeding the 200-character limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
