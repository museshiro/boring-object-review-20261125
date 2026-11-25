import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic line, written exactly as-is with no trailing newline.
const line = "Ten thousand shoes wiped, zero thanks, and it still says WELCOME in all caps.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
