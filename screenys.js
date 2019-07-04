const puppeteer = require('puppeteer');

const speakorz = [
	{
		filename: 'laura',
		name: 'Laura Gonzalez',
		talk: ' typescript made enjoyable',
		photo:
			'https://pbs.twimg.com/profile_images/1123259650126774272/KOE88EYU_reasonably_small.jpg',
	},
	{
		filename: 'sara',
		name: 'Sara Vieira',
		talk: 'No. typescript will NEVER be enjoyable',
		photo:
			'https://pbs.twimg.com/profile_images/1092069028154216449/M-yDW4aY_400x400.jpg',
	},
];

const shot = async ({ filename, ...data }) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://localhost:3000?data=' + JSON.stringify(data));
	await page.setViewport({
		width: 1920,
		height: 1080,
	});
	await page.waitFor(1000);

	await page.screenshot({ path: 'out/' + filename + '.png' });
	console.log(filename);
	await browser.close();
};

(async () => {
	for (const key of speakorz) {
		await shot(key);
	}
})();
