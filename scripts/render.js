#!/usr/bin/env node
'use strict';

const { chromium } = require('playwright');
const path = require('path');

const [,, htmlFile, widthArg, heightArg] = process.argv;

if (!htmlFile) {
  console.error('Usage: render.sh <file.html> [width] [height]');
  process.exit(1);
}

const width  = parseInt(widthArg,  10) || 1080;
const height = parseInt(heightArg, 10) || 1080;
const absHtml = path.resolve(htmlFile);
const outFile = absHtml.replace(/\.html$/, '.png');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width, height });
  // networkidle ensures Google Fonts (and any other external assets) finish loading
  await page.goto(`file://${absHtml}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width, height } });
  await browser.close();
  console.log(`✓  ${outFile}`);
})().catch(err => {
  console.error(err.message);
  process.exit(1);
});
