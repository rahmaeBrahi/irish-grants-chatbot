// Generates lib/knowledge-base.ts from knowledge-base.md.
// Using JSON.stringify keeps every backtick / template-literal char safe,
// and bundles the KB as pure JS so it works in any serverless runtime.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "knowledge-base.md"), "utf8");

const out = `// AUTO-GENERATED from knowledge-base.md by scripts/gen-kb.mjs — do not edit by hand.
export const KNOWLEDGE_BASE = ${JSON.stringify(source)};
`;

mkdirSync(join(root, "lib"), { recursive: true });
writeFileSync(join(root, "lib", "knowledge-base.ts"), out);
console.log(`gen-kb: wrote lib/knowledge-base.ts (${source.length} chars)`);
