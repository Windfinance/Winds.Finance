import styles from './OurTeam.module.scss';
import Fade from 'react-reveal/Fade';

function OurTeam() {
	return (
		<div id='Team' className={styles.main}>
			<Fade bottom>
				<h1>
					Meet The Team<span>.</span>
				</h1>
			</Fade>
			<Fade bottom>
				<p>
					We are full of passion and commitment. We belive more people should have access to Defi, thats why our Goal is to make
					the Best App possible available on the market!
				</p>
			</Fade>

			<div className={styles['content-container']}>
				<Fade bottom>
					<div className={styles['team-container']}>
						<img src={require('assets/images/market.webp')} alt='avatar' />

						<div className={styles['team-container__header']}>
							<h2>
								Hanna B<span>.</span>
							</h2>

							<p>
								Marketing Specialist <br />
								<span>Community Angel</span>
							</p>
						</div>
					</div>

					<div className={styles['team-container']}>
						<img src={require('assets/images/back.webp')} alt='avatar' />

						<div className={styles['team-container__header']}>
							<h2>
								Mykyta S<span>.</span>
							</h2>

							<p>
								Design Artist <br />
								<span>Futurist</span>
							</p>
						</div>
					</div>

					<div className={styles['team-container']}>
						<img src={require('assets/images/asd.webp')} alt='avatar' />

						<div className={styles['team-container__header']}>
							<h2>
								Patrick P<span>.</span>
							</h2>

							<p>
								Frontend Developer
								<br />
								<span>Next.Js Visioner</span>
							</p>
						</div>
					</div>

					<div className={styles['team-container']}>
						<img src={require('assets/images/pink.webp')} alt='avatar' />

						<div className={styles['team-container__header']}>
							<h2>
								Sam B<span>.</span>
							</h2>

							<p>
								Backend Developer
								<br />
								<span>C# & .Net master</span>
							</p>
						</div>
					</div>

					<div className={styles['team-container']}>
						<img src={require('assets/images/Anonymous_emblem.svg.webp')} alt='avatar' />

						<div className={styles['team-container__header']}>
							<h2>Sigimund K.</h2>

							<p>
								Blockchain Developer
								<br />
								<span>Solidity Crawler</span>
							</p>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default OurTeam;
