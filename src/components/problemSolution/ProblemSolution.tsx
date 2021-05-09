import styles from './ProblemSolution.module.scss';
import Fade from 'react-reveal/Fade';

function ProblemSolution() {
	return (
		<div id='About' className={styles.main}>
			<div className={styles.container}>
				<Fade bottom>
					<h1>
						Winds Finance Solves The Biggest Pain Point In Crypto <span>!</span>
					</h1>

					<div className={styles['box-container']}>
						<Fade left>
							<div className={styles['box-container__box']}>
								<img src={require('assets/images/problemIcon.svg')} alt='avatar' />

								<div className={styles['text-container']}>
									<h2>
										Problem<span>.</span>
									</h2>

									<p>
										Digital currencies are rarely used as they were originally intended. Holders infrequently transact
										and there are few opportunities to spend in the real-world. The world of digital currencies has
										become a global casino
									</p>
								</div>
							</div>
						</Fade>
						<Fade right>
							<div className={styles['box-container__box']}>
								<img src={require('assets/images/solutionIcon.svg')} alt='avatar' />

								<div className={styles['text-container']}>
									<h2>
										Solution<span>.</span>
									</h2>

									<p>
										Simple and straightforward, Winds Finance makes it easy to spend and use digital currencies.
										Merchants or holders can download the app and immediately spend and receive digital currencies.
										Store, lend, convert, stake, and spend. It’s all possible with the Winds Finance app.
									</p>
								</div>
							</div>
						</Fade>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default ProblemSolution;
