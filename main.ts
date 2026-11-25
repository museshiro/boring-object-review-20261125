import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Setup: the mat's thankless workload. Punch: its optimism never wavers.
const SETUP = "Ten thousand shoes wiped, zero thanks, ";
const PUNCH = "and it still says WELCOME in all caps.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SETUP + PUNCH, "utf8");
