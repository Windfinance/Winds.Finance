import styles from './Timeline.module.scss';
import TimelineItem from './TimelineItem';

function Timeline() {
	const timelineData = [
		{
			date: 'May and June of 2021',
			category: {
				tag: 'May and June of 2021',
				color: 'linear-gradient(170deg, #3acbd0 14%, #11ca91 69%)'
			},

			check: true,
			list: [
				'- Winds Finance Wallet Release Desktop & Mobile',
				'- Coingecko Listing',
				'- CoinMarketCap Listing',
				'- Partnerships with Social Media Influencers',
				'- Winds Finance Stacking Desktop'
			]
		},
		{
			date: 'July, August, and September of 2021',
			category: {
				tag: 'Q3 2021',
				color: 'linear-gradient(170deg, #3acbd0 14%, #11ca91 69%)'
			},

			check: true,
			list: [
				' Winds Finance Decentralized Banking Desktop -',
				'Winds Finance Mobile Decentralized Exchange Desktop - ',
				'Developers AMA - ',
				'Exchange Listings  - ',
				'Integration of all DEX’s into Winds Finance  - ',
				'Additional Partnerships   - '
			]
		},
		{
			date: 'October, November, and December of 2021',
			category: {
				tag: 'Q4 2021',
				color: 'linear-gradient(170deg, #3acbd0 14%, #11ca91 69%)'
			},

			check: true,
			list: [
				'- Winds Finance Stacking Mobile',
				'- Winds Finance Decentralized Banking Mobile',
				'- Winds Finance Mobile Decentralized Exchange Mobile',
				'- Major Exchange Listing'
			]
		},
		{
			date: 'January, February, and March of 2022',
			category: {
				tag: 'Q1 2022',
				color: 'linear-gradient(170deg, #3acbd0 14%, #11ca91 69%)'
			},

			check: true,
			list: [
				'- Fiat Gateway for Winds Finance Desktop and Mobile Version',
				'- Announcing DeFi Partnerships for winds finance DEX',
				'- Live Token based Governance',
				'- Partnership with other Protocols '
			]
		},
		{
			date: 'April of 2022',
			category: {
				tag: 'Q2 2022',
				color: 'linear-gradient(170deg, #3acbd0 14%, #11ca91 69%)'
			},

			check: true,
			list: ['- Winds Finance Liquidity Pool Merchants', '- NFT project Announcement', '- Multi Chain integration']
		}
	];

	return (
		<div className={styles.main}>
			{timelineData.length > 0 && (
				<div className={styles['timeline-container']}>
					{timelineData.map((data, idx) => (
						<TimelineItem data={data} key={idx} />
					))}
				</div>
			)}

			<div className={styles['mass-adoption']}>
				<p>Mass Adoption</p>
			</div>
		</div>
	);
}

export default Timeline;
