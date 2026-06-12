import { createCanvas } from "canvas";
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#0A0A0F";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

ctx.fillStyle = "#E8E8E0";
ctx.font = "bold 96px sans-serif";
ctx.textBaseline = "alphabetic";
ctx.fillText("Tyler Chambers", 80, 320);

ctx.fillStyle = "#4F8EF7";
ctx.font = "40px sans-serif";
ctx.fillText("Where industrial expertise meets modern technology", 80, 390);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "og-default.png");
writeFileSync(outPath, canvas.toBuffer("image/png"));
console.log(`Wrote ${outPath}`);
