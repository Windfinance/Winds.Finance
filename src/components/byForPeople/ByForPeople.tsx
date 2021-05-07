import styles from './ByForPeople.module.scss';
import { Button } from 'antd';

function ByForPeople() {
	return (
		<div className={styles.main}>
			<div className={styles['main__container']}>
				<img className={styles.robot} src={require('assets/images/wave21qewqe.svg')} alt='avatar' />

				<h2>For the people by the people.</h2>

				<p>
					<span>$WINDS</span> token have NO OWNERSHiP !
				</p>

				<div className={styles['main__button-container']}>
					<Button
						className={styles['main__text--button']}
						onClick={() => console.log('clicked')}
						icon={<img src={require('assets/images/iconfinder_Checkmark_2190986.svg')} alt='avatar' />}
					>
						Renounce
					</Button>

					<Button
						icon={<img src={require('assets/images/iconfinder_shield_2561385.svg')} alt='avatar' />}
						className={styles['main__text--button']}
						onClick={() => console.log('clicked')}
					>
						Verified
					</Button>

					<Button
						icon={<img src={require('assets/images/iconfinder_icons_dashboard_1564501.svg')} alt='avatar' />}
						className={styles['main__text--button']}
						onClick={() => console.log('clicked')}
					>
						Chart
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ByForPeople;
