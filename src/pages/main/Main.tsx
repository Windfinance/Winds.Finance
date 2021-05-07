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

function Main() {
	return (
		<div className={styles.main}>
			<Navigation />
			<Header />
			<Features />
			<ProblemSolution />
			<MobileAppFeatures />
			<ByForPeople />
			{/* <OurTeam /> */}
			<RoadMap />
			<Tokenomics />
			<GetInTouch />
			<div className={styles.footer}>
				<div className={styles['footer__container']}>
					<div className={styles['bottom-nav']}>
						<img src={require('assets/images/x.svg')} alt='avatar' />

						<div className={styles.nav}>
							<ul>
								<li>Home</li>

								<li>About</li>

								<li>Team</li>

								<li>Token</li>

								<li>Contact</li>
							</ul>
						</div>
					</div>

					<div className={styles['bottom-links']}>
						<div className={styles.copyright}>Copyright 2021 © Winds Finance</div>

						<div className={styles.links}>
							<img src={require('assets/images/twitter.svg')} alt='twitter' />

							<img src={require('assets/images/telegram.svg')} alt='telegram' />

							<img src={require('assets/images/email.svg')} alt='email' />

							<img src={require('assets/images/medium.svg')} alt='medium' />
						</div>
					</div>
				</div>
			</div>
			{/*
			HEADER 

			*/}
		</div>
	);
}

export default Main;
