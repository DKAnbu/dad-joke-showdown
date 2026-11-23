import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I told my socks they were a perfect pair, and now they refuse to split up even in the laundry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
