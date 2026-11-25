// The GPS Swears It Was a Shortcut
// Writes the GPS's one-line excuse for sending the driver down the wrong
// road to /output/entry.txt (1-200 characters, plain text, no setup).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The GPS, smug and defensive, blaming the map: the lake used to have a
// road on it, water is not, in its opinion, a valid detour, and the fish
// seemed perfectly fine with the route.
const EXCUSE =
  "Technically the lake had a road on it in 2019, and I refuse to accept that water counts as a detour — the fish seemed fine with it.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

const line = EXCUSE.trim();
const charCount = [...line].length;
if (charCount === 0 || charCount > 200 || line.includes("\n")) {
  throw new Error(
    `entry must be a single line of 1-200 characters, got ${charCount}`,
  );
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line + "\n", "utf8");
console.log(`Wrote ${charCount} characters to ${outPath}`);
