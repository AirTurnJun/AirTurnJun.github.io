import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const distDir = "dist";
const indexPath = join(distDir, "index.html");
const routes = [
  "/",
  "/product",
  "/about",
  "/support",
  "/warranty",
  "/warranty-policy",
  "/privacy",
  "/terms",
  "/returns",
  "/downloads",
  "/shipping-policy",
  "/app-developers"
];

if (!existsSync(indexPath)) {
  throw new Error(`Missing ${indexPath}. Run vite build before prerender.`);
}

const indexHtml = readFileSync(indexPath, "utf8");

for (const route of routes) {
  if (route === "/") continue;
  const routeIndexPath = join(distDir, route.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(routeIndexPath), { recursive: true });
  writeFileSync(routeIndexPath, indexHtml);
}

// Keep a 404 fallback aligned with the built app shell.
cpSync(indexPath, join(distDir, "404.html"));

console.log(`Prerendered ${routes.length} routes to static HTML.`);
