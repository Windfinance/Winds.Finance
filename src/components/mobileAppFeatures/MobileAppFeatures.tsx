import styles from './MobileAppFeatures.module.scss';
import Fade from 'react-reveal/Fade';

function MobileAppFeatures() {
	return (
		<div className={styles.main}>
			<div className={styles['main__content']}>
				<Fade bottom>
					<h2>
						Winds.Finance Mobile App Capabilities<span>.</span>
					</h2>
				</Fade>

				<Fade left>
					<ul>
						<li>
							<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
							In-App Stacking<span>.</span>
						</li>

						<li>
							<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
							In-App Lending<span>.</span>
						</li>

						<li>
							<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
							In-App Exchange<span>.</span>
						</li>

						<li>
							<img src={require('assets/images/checkbox23.svg')} alt='avatar' />
							Notifications<span>.</span>
						</li>
					</ul>
				</Fade>
			</div>

			<img className={styles['main__mobile']} src={require('assets/images/mobilePngzxc.webp')} alt='avatar' />
		</div>
	);
}

export default MobileAppFeatures;
