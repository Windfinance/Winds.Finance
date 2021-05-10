import Header from 'components/header';
import Navigation from 'components/navigation';
import MobileAppFeatures from 'components/mobileAppFeatures';
import OurTeam from 'components/ourTeam';
import styles from './Main.module.scss';
import Features from 'components/features';
import ByForPeople from 'components/byForPeople';
import ProblemSolution from 'components/problemSolution';
import GetInTouch from 'components/getInTouch';
import RoadMap from 'components/roadmap';
import Tokenomics from 'components/tokenomics';
import SmoothScroll from 'shared/functions/SmoothScroll';
import { useRouter } from 'next/router';

function Main() {
	const router = useRouter();

	const Scroll = (section: string) => {
		SmoothScroll.scrollTo(section);
	};

	return (
		<div className={styles.main}>
			<Navigation />

			<Header />

			<Features />

			<ProblemSolution />

			<MobileAppFeatures />

			<ByForPeople />

			<OurTeam />

			<RoadMap />

			<Tokenomics />

			<GetInTouch />

			<div className={styles.footer}>
				<div className={styles['footer__container']}>
					<div className={styles['bottom-nav']}>
						<img src={require('assets/images/x.svg')} alt='avatar' />

						<div className={styles.nav}>
							<ul>
								<li onClick={() => Scroll('Header')}>Home</li>

								<li onClick={() => Scroll('About')}>About</li>

								<li onClick={() => Scroll('Team')}>Team</li>

								<li onClick={() => Scroll('Tokenomics')}>Token</li>

								<li onClick={() => Scroll('Contact')}>Contact</li>
							</ul>
						</div>
					</div>

					<div className={styles['bottom-links']}>
						<div className={styles.copyright}>Copyright 2021 © Winds Finance</div>

						<div className={styles.links}>
							<img
								src={require('assets/images/twitter.svg')}
								alt='twitter'
								onClick={() => router.push('https://twitter.com/WindsFinance')}
							/>

							<img
								src={require('assets/images/telegram.svg')}
								onClick={() => router.push('https://t.me/WindsFinance')}
								alt='telegram'
							/>

							<img src={require('assets/images/email.svg')} alt='email' />

							<img
								src={require('assets/images/medium.svg')}
								onClick={() =>
									router.push(
										'https://windfinancetoken.medium.com/winds-finance-the-new-era-of-decentralized-applications-has-begun-3a83cee9d329'
									)
								}
								alt='medium'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
