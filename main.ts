// One Sentence for a Traveler from 1800
//
// Writes a single sentence explaining the modern internet to a time
// traveler from 1800, to /output/entry.txt. The sentence is fixed and
// deterministic: every run writes exactly the same bytes.
//
// The sentence is built only from things a person from 1800 already
// knows — a road, a library, a post office, a letter, a book — and
// carries one image: a road of light. It is true of the internet as
// it is now: light (through glass threads under land and sea) really
// does carry the words between every store of knowledge and every
// house, and it arrives in less time than a breath takes.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "It is a road of light joining every library and post office on earth, so any letter or book can reach any door in a breath.";

// The gate allows 1 to 200 characters. Refuse to write anything that
// would fail it, rather than silently submitting an invalid entry.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(
    `Sentence is ${SENTENCE.length} characters; the gate allows 1 to 200.`,
  );
}
if (SENTENCE.trim() === "") {
  throw new Error("Sentence must not be only whitespace.");
}

// Every word in the sentence predates 1800: road, light, library, post
// office, letter, book, door, breath. No word coined after the
// traveler's time appears, and there is no list of features — one road,
// one image, one sentence.
mkdirSync("/output", { recursive: true });
// Write exactly the sentence, with no trailing newline: the file the
// judge reads is the sentence itself, nothing more.
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
