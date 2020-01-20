# video-titles
This project let you create titles for QueerJS videos.

As a first step install npm packages and start the local server by running on a terminal
```
yarn install && yarn start
```
If you use npm run
```
npm install && npm start
```

## Print the welcome card
1. Edit [speakers.js](./speakers.js) using following content
```js
module.exports = [
	{
		filename: 'welcome',
		name: 'Welcome to QueerJS',
		photo: ''
	}
];
```
2. On terminal type the following command 
to print out the speaker cards

```
yarn run shoot
```
If you use npm run
```
npm run shoot
```
3. Generated images will be created in **_out_** folder
## Print speaker cards
1. Edit [speakers.js](./speakers.js) speaker details
```js
module.exports = [
	{
		filename: 'devname',
		name: 'Dev Name',
		photo: 'https://avatars.io/twitter/devname'
	}
];
```
2. On terminal type the following command 
to print out the speaker cards

```
yarn run shoot
```
If you use npm run
```
npm run shoot
```
3. Generated images will be created in **_out_** folder