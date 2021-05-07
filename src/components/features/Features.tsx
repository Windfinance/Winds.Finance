import styles from './Features.module.scss';
import ItemsCarousel from 'react-items-carousel';
import { useState } from 'react';

function Features() {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	return (
		<div className={styles.main}>
			<h1>
				Features<span>.</span>
			</h1>
			<div className={styles.container}>
				{/* <div style={{ padding: `0 ${chevronWidth}px` }}> */}
				{/* <ItemsCarousel
						requestToChangeActive={setActiveItemIndex}
						activeItemIndex={activeItemIndex}
						numberOfCards={4}
						gutter={4}
						slidesToScroll
						leftChevron={<button>{'<'}</button>}
						rightChevron={<button>{'>'}</button>}
						outsideChevron
						chevronWidth={chevronWidth}
					> */}
				<div className={styles['feature-box']}>
					<img src={require('assets/images/chartsDecentralized.webp')} alt='avatar' />

					<p>Proffesional Charts and Analitics</p>
				</div>

				<div className={styles['feature-box']}>
					<img src={require('assets/images/decentralizedExchange.webp')} alt='avatar' />

					<p>Decentralized Exchange </p>
				</div>

				<div className={styles['feature-box']}>
					<img src={require('assets/images/yieldFarming.webp')} alt='avatar' />

					<p>Yieald Farming </p>
				</div>

				<div className={styles['feature-box']}>
					<img src={require('assets/images/decentralizedConsumer-banking.webp')} alt='avatar' />

					<p>Decentralized Banking </p>
				</div>

				<div className={styles['feature-box']}>
					<img src={require('assets/images/mobile-payments-icon.webp')} alt='avatar' />

					<p>
						Mobile Integration <br /> <span>(for every feature)</span>
					</p>
				</div>
				{/* </ItemsCarousel> */}
			</div>

			{/* <div className={styles['feature-box']}>
					<img src={require('assets/images/mobile-payments-icon.webp')} alt='avatar' />

					<p>Powered by Binance Smart Chain</p>
				</div>

				<div className={styles['feature-box']}>
					<img src={require('assets/images/mobile-payments-icon.webp')} alt='avatar' />

					<p>Community Driven. Transparent Development</p>
				</div>

				<div className={styles['feature-box']}>
					<img src={require('assets/images/mobile-payments-icon.webp')} alt='avatar' />

					<p>Safe and Transparent</p>
				</div> */}
			{/* </div> */}
		</div>
	);
}

export default Features;
