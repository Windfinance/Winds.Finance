import Chart from './components/Chart';
import styles from './Tokenomics.module.scss';
import Transactions from 'components/transactions';
import Fade from 'react-reveal/Fade';

function Tokenomics() {
	return (
		<div id='Tokenomics' className={styles.main}>
			<div className={styles.container}>
				<Fade bottom>
					<h1>
						Tokenomics<span>.</span>
					</h1>
				</Fade>
				<div className={styles['boxes-container']}>
					<Fade left>
						<div className={styles.box}>
							<h2>
								<span>$WINDS</span> Distribution<span>.</span>
							</h2>

							<ul>
								<li>
									<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
									Total Supply of $WINDS token is 1,000,000,000 and 30% will is burned initially.
								</li>

								<li>
									<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
									50% were permanently locked with BNB on PanCakeSwap to provide initial liquidity. The LP tokens that can
									be used to redeem the initial liquidity were burned, essentially meaning they are locked in the abyss
									forever.
								</li>

								<li>
									<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
									5% has been reserved for marketing purposes and partnerships{' '}
								</li>

								<li>
									<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
									10% goes to AirDrop Wallet which lands straight into top 400 holder's wallets{' '}
								</li>

								<li>
									<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
									5% has been reserved for contract and project development
								</li>
							</ul>
						</div>
					</Fade>
					<Fade right>
						<div className={styles.box}>
							<Chart />
						</div>{' '}
					</Fade>
				</div>

				<Transactions />
			</div>
		</div>
	);
}

export default Tokenomics;
