import styles from './ProblemSolution.module.scss';

function ProblemSolution() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<h1>
					Winds Finance Solves The Biggest Pain Point In Crypto <span>!</span>
				</h1>

				<div className={styles['box-container']}>
					<div className={styles['box-container__box']}>
						<img src={require('assets/images/problemIcon.svg')} alt='avatar' />

						<div className={styles['text-container']}>
							<h2>
								Problem<span>.</span>
							</h2>

							<p>
								Digital currencies are rarely used as they were originally intended. Holders infrequently transact and there
								are few opportunities to spend in the real-world. The world of digital currencies has become a global casino
							</p>
						</div>
					</div>

					<div className={styles['box-container__box']}>
						<img src={require('assets/images/solutionIcon.svg')} alt='avatar' />

						<div className={styles['text-container']}>
							<h2>
								Solution<span>.</span>
							</h2>

							<p>
								Simple and straightforward, Winds Finance makes it easy to spend and use digital currencies. Merchants or
								holders can download the app and immediately spend and receive digital currencies. Store, lend, convert,
								stake, and spend. It’s all possible with the Winds Finance app.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProblemSolution;
