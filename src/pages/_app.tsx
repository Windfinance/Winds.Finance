import 'antd/dist/antd.css';
import '../assets/global-styles.scss';
import '../assets/wind-finance-theme.css';
import Head from 'next/head';
import * as React from 'react';
import Main from './main';

function MyApp() {
	return (
		<>
			<Head>
				<title>Winds.Finance</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
			</Head>

			<Main />
		</>
	);
}

export default MyApp;
