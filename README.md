# Badges/Shields Shadow Reference

Generates a comparison table for new badges/shields with shadows.

Note: you'll have to view this locally in VS Code's _Markdown: Open Preview_.
GitHub's online view doesn't allow embedded `<svg>`s.

> See <https://github.com/badges/shields/issues/5497>

```shell
npm i
npm run build
```

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Current</th>
			<th>Diffuse Shadow</th>
		</tr>
	</thead>
	<tbody>
	<tr>
		<td>aqua</td>
		<td>
			<img alt="aqua badge without shadow" src="https://img.shields.io/badge/%23-aqua  -aqua.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68" height="20" role="img" aria-label="aqua badge, with a diffuse text shadow">
	<title>#: aqua</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="68" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="48" height="20" fill="aqua"/>
		<rect width="68" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">aqua  </text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">aqua  </text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">aqua  </text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>beige</td>
		<td>
			<img alt="beige badge without shadow" src="https://img.shields.io/badge/%23-beige -beige.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="20" role="img" aria-label="beige badge, with a diffuse text shadow">
	<title>#: beige</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="80" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="60" height="20" fill="beige"/>
		<rect width="80" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">beige </text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">beige </text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">beige </text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>chocolate</td>
		<td>
			<img alt="chocolate badge without shadow" src="https://img.shields.io/badge/%23-chocol-chocolate.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="20" role="img" aria-label="chocolate badge, with a diffuse text shadow">
	<title>#: chocolate</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="128" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="108" height="20" fill="chocolate"/>
		<rect width="128" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">chocol</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">chocol</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">chocol</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>coral</td>
		<td>
			<img alt="coral badge without shadow" src="https://img.shields.io/badge/%23-coral -coral.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="20" role="img" aria-label="coral badge, with a diffuse text shadow">
	<title>#: coral</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="80" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="60" height="20" fill="coral"/>
		<rect width="80" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">coral </text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">coral </text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">coral </text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>lime</td>
		<td>
			<img alt="lime badge without shadow" src="https://img.shields.io/badge/%23-lime  -lime.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68" height="20" role="img" aria-label="lime badge, with a diffuse text shadow">
	<title>#: lime</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="68" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="48" height="20" fill="lime"/>
		<rect width="68" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">lime  </text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">lime  </text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">lime  </text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>purple</td>
		<td>
			<img alt="purple badge without shadow" src="https://img.shields.io/badge/%23-purple-purple.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="purple badge, with a diffuse text shadow">
	<title>#: purple</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="purple"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">purple</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">purple</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">purple</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>teal</td>
		<td>
			<img alt="teal badge without shadow" src="https://img.shields.io/badge/%23-teal  -teal.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68" height="20" role="img" aria-label="teal badge, with a diffuse text shadow">
	<title>#: teal</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="68" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="48" height="20" fill="teal"/>
		<rect width="68" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">teal  </text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">teal  </text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">teal  </text>
	</g>
</svg>
		</td>
	</tr>
	<tr>
		<td>brightgreen</td>
		<td>
			<img alt="#: 44cc11" src="https://img.shields.io/badge/%23-44cc11-44cc11.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="10b73d badge, with a diffuse text shadow">
	<title>#: 10b73d</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#10b73d"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">10b73d</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">10b73d</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">10b73d</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>green</td>
		<td>
			<img alt="#: 97ca00" src="https://img.shields.io/badge/%23-97ca00-97ca00.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="009800 badge, with a diffuse text shadow">
	<title>#: 009800</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#009800"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">009800</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">009800</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">009800</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>yellow</td>
		<td>
			<img alt="#: dfb317" src="https://img.shields.io/badge/%23-dfb317-dfb317.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="c89615 badge, with a diffuse text shadow">
	<title>#: c89615</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#c89615"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">c89615</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">c89615</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">c89615</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>yellowgreen</td>
		<td>
			<img alt="#: a4a61d" src="https://img.shields.io/badge/%23-a4a61d-a4a61d.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="95991a badge, with a diffuse text shadow">
	<title>#: 95991a</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#95991a"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">95991a</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">95991a</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">95991a</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>orange</td>
		<td>
			<img alt="#: fe7d37" src="https://img.shields.io/badge/%23-fe7d37-fe7d37.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="ea7233 badge, with a diffuse text shadow">
	<title>#: ea7233</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#ea7233"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">ea7233</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">ea7233</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">ea7233</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>red</td>
		<td>
			<img alt="#: e05d44" src="https://img.shields.io/badge/%23-e05d44-e05d44.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="dd4343 badge, with a diffuse text shadow">
	<title>#: dd4343</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#dd4343"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">dd4343</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">dd4343</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">dd4343</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>blue</td>
		<td>
			<img alt="#: 007ec6" src="https://img.shields.io/badge/%23-007ec6-007ec6.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="007ec6 badge, with a diffuse text shadow">
	<title>#: 007ec6</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#007ec6"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">007ec6</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">007ec6</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">007ec6</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>grey</td>
		<td>
			<img alt="#: 555555" src="https://img.shields.io/badge/%23-555555-555555.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="555555 badge, with a diffuse text shadow">
	<title>#: 555555</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#555555"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">555555</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">555555</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">555555</text>
	</g>
</svg>
		</td>
	</tr>
		<tr>
		<td>lightgrey</td>
		<td>
			<img alt="#: 9f9f9f" src="https://img.shields.io/badge/%23-9f9f9f-9f9f9f.svg" />
		</td>
		<td>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="20" role="img" aria-label="939393 badge, with a diffuse text shadow">
	<title>#: 939393</title>
	<filter id="blur">
	  <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
	</filter>
	<linearGradient id="s" x2="0" y2="100%">
		<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
		<stop offset="1" stop-opacity=".1"/>
	</linearGradient>
	<clipPath id="r">
		<rect width="92" height="20" rx="3" fill="#fff"/>
	</clipPath>
	<g clip-path="url(#r)">
		<rect width="19" height="20" fill="#555"/>
		<rect x="19" width="72" height="20" fill="#939393"/>
		<rect width="92" height="20" fill="url(#s)"/>
	</g>
	<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" paint-order="stroke" style="stroke:#01010180;stroke-width:3px" text-rendering="geometricPrecision" font-size="110">
		<text filter="url(#blur)" aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)" textLength="90">#</text>
		<text aria-hidden="true" x="105" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="90">#</text>
		<text x="105" y="140" transform="scale(.1)" fill="#fff" textLength="90">#</text>
		<text filter="url(#blur)" aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".75" transform="scale(.1)">939393</text>
		<text aria-hidden="true" x="420" y="145" fill="#010101" fill-opacity=".3" transform="scale(.1)">939393</text>
		<text x="420" y="140" transform="scale(.1)" fill="#fff">939393</text>
	</g>
</svg>
		</td>
	</tr>
	</tbody>
</table>
