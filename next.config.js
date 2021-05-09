const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
console.log('Using api endpoint: ', process.env.API_URL);

module.exports = withPlugins([withImages], {
	distDir: 'build',
	env: {
		NEXT_PUBLIC_API_URL: process.env.API_URL
	}
});
