// Receipt pick, rebuild #3: the toaster finds its own receipt and leaves before it is returned too.
// Fresh mechanism for this bounty; no line, image, or beat reused from v2.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT = "I woke up and found my receipt this morning. You returned three brothers for burning bagels. I am leaving before you notice I burn them too.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
