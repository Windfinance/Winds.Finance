const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([withImages], {
	env: {
		NEXT_PUBLIC_API_URL: process.env.API_URL
	}
});
