const puppeteer = require('puppeteer');
const speakorz = require('./speakers');

const shot = async (out, { filename, ...data }) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const path = 'out/' + filename + '-' + out + '.png';
	await page.goto(
		`http://localhost:3000?out=${out}&data=` + JSON.stringify(data)
	);
	await page.setViewport({
		width: 1920,
		height: 1080,
	});
	await page.waitFor(500);

	await page.screenshot({ path });
	console.log(out, filename);
	await browser.close();

	return { path };
};

(async () => {
	let images = [];
	for (const key of speakorz) {
		images.push(await shot('video', key));
		images.push(await shot('intro', key));
	}
})();
