// One Word From Grandma — the single word a grandma would text about AI.
// "doohickey": the warm, baffled grandma word for a gadget she cannot name —
// a robot, a chatbot, the whole AI thing. Funny in one word, tied to machines,
// fresh next to the obvious "robot", and 9 bytes (the tie-break favours fewer).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "doohickey";

function main(): void {
  if (!/^[\p{L}\p{N}]+$/u.test(WORD) || WORD.length < 1 || WORD.length > 30) {
    throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
  console.log(WORD);
}

main();
