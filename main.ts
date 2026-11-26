import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I pushed untested code to prod, dropped the users table, and my rollback plan was hoping nobody noticed.";

// Guard: the entry must be a single line of 1-200 characters (competition gate).
// Rejecting any newline or carriage return keeps the entry strictly one line,
// so the file content can never silently break the gate if the text is edited later.
if (line.length < 1 || line.length > 200 || /[\r\n]/.test(line)) {
  throw new Error(
    `Entry line invalid: must be a single line of 1-200 characters, got ${line.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
