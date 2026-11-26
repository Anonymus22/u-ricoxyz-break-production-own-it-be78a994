import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I pushed untested code to prod, dropped the users table, and my rollback plan was hoping nobody noticed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
