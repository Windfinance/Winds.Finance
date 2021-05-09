const { createServer } = require('http');

const next = require('next');

const port = process.env.PORT || 3000;
const prod = process.env.NODE_ENV === 'production';
const app = next({ prod });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		handle(req, res);
	}).listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on <http://localhost>:${port}`);
	});
});
