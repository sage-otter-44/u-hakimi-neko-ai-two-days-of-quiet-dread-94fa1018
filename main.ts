import { mkdirSync, writeFileSync } from "node:fs";

// One code-review comment: approves the PR, carries quiet existential dread.
// The laugh comes from the dread itself — a tired engineer approving code
// whose only safety net is a test even its author no longer understands.
const comment =
  "LGTM. The only test covering this path is the one I wrote at 2 a.m. and no longer understand.";

// Gate: the entry must be exactly one non-blank line of at most 140 chars,
// or the program fails loudly instead of shipping an invalid entry.
if (comment.includes("\n") || comment.length > 140 || comment.trim().length === 0) {
  throw new Error(`invalid entry: ${comment.length} chars, must be one line of 1-140 chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", comment, "utf8");
console.log(`wrote ${comment.length} chars to /output/entry.txt`);
