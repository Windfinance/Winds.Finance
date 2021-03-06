import styles from './Transactions.module.scss';
import Fade from 'react-reveal/Fade';

function Transactions() {
	return (
		<>
			<div id='Transactions' className={styles.main}>
				{/* <img className={styles.robot} src={require('assets/images/lupa.svg')} alt='avatar' /> */}
				<Fade bottom>
					<h1>
						Transactions <span>.</span>
					</h1>
				</Fade>
				<Fade cascade bottom>
					<div className={styles.container}>
						<div className={styles.box}>
							<img src={require('assets/images/backtoppl.svg')} alt='avatar' />

							<p>3% of all trades redistributed to the holders</p>
						</div>
						<div className={styles.box}>
							<img src={require('assets/images/lock.svg')} alt='avatar' />

							<p>3% of all trades are auto-locked inside liquidity provider on PancakeSwap</p>
						</div>
						<div className={styles.box}>
							<img src={require('assets/images/fire2.svg')} alt='avatar' />

							<p>1% of all trades are burned </p>
						</div>
					</div>
				</Fade>
			</div>
		</>
	);
}

export default Transactions;
