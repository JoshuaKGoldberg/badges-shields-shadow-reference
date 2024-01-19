import * as fs from "node:fs/promises";

const cssRows = [
  "aqua",
  "beige",
  "chocolate",
  "coral",
  "lime",
  "purple",
  "teal",
];

const hexRows = [
  { alias: "brightgreen", current: "44cc11", updated: "10b73d" },
  { alias: "green", current: "97ca00", updated: "009800" },
  { alias: "yellow", current: "dfb317", updated: "c89615" },
  { alias: "yellowgreen", current: "a4a61d", updated: "95991a" },
  { alias: "orange", current: "fe7d37", updated: "ea7233" },
  { alias: "red", current: "e05d44", updated: "dd4343" },
  { alias: "blue", current: "007ec6" },
  { alias: "grey", current: "555555" },
  { alias: "lightgrey", current: "9f9f9f", updated: "939393" },
];

function generateCurrentImage(color) {
  const text = `${color}`.padEnd(6, " ").slice(0, 6);

  return `<img alt="${color} badge without shadow" src="https://img.shields.io/badge/%23-${text}-${color}.svg" />`;
}

function generateDiffuseShadowImage(color, fill = color) {
  const text = `${color}`.padEnd(6, " ").slice(0, 6);
  const width = 20 + color.length * 12;
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="20" role="img" aria-label="${color} badge, with a diffuse text shadow">
	<title>#: ${color}</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="${width}" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="${width - 20}" height="20" fill="${fill}"/>
		<rect width="${width}" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">${text}</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">${text}</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">${text}</text>
	</g>
</svg>`;
}

function generateCssRow(color) {
  return `
	<tr>
		<td>${color}</td>
		<td>
			${generateCurrentImage(color)}
		</td>
		<td>
			${generateDiffuseShadowImage(color)}
		</td>
	</tr>
`.trim();
}

function generateHexRow({ alias, current, updated = current }) {
  return `
	<tr>
		<td>${alias}</td>
		<td>
			<img alt="#: ${current}" src="https://img.shields.io/badge/%23-${current}-${current}.svg" />
		</td>
		<td>
			${generateDiffuseShadowImage(updated, `#${updated}`)}
		</td>
	</tr>
`.trim();
}

fs.writeFile(
  "README.md",
  `# Badges/Shields Shadow Reference

Generates a comparison table for new badges/shields with shadows.

Note: you'll have to view this locally in VS Code's _Markdown: Open Preview_.
GitHub's online view doesn't allow embedded \`<svg>\`s.

> See <https://github.com/badges/shields/issues/5497>

\`\`\`shell
npm i
npm run build
\`\`\`

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Current</th>
			<th>Diffuse Shadow</th>
		</tr>
	</thead>
	<tbody>
	${cssRows.map(generateCssRow).join("\n\t\t")}
	${hexRows.map(generateHexRow).join("\n\t\t")}
	</tbody>
</table>
`
);
