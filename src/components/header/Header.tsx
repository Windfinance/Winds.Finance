import styles from './Header.module.scss';
import { Button } from 'antd';
import Tooltip from '../Tooltip';
import Fade from 'react-reveal/Fade';

function Header() {
	return (
		<div id='Header' className={styles.main}>
			<div className={styles['main__text']}>
				<h2>
					Let the <span>$Winds</span> Guide You
				</h2>
				<p>
					<span>Our Goal</span> is to Open the fantastic world of DeFi to Everyone.
					<br />
					Winds Finance provides <span>DeFi</span> solutions such as Trading, Stacking, Lending, Yield farming and{' '}
					<span>Exchanging</span>. All those opportunities comes within safe and compact <span>WEB</span> and <span>MOBILE</span>{' '}
					applications.
				</p>

				<div>
					<Button className={styles['main__text--button']} onClick={() => console.log('clicked')}>
						Buy on PancakeSwap
					</Button>
					<Tooltip title={'Comming Soon'}>
						<Button className={styles['main__text--button-app']} onClick={() => console.log('clicked')}>
							APP
						</Button>
					</Tooltip>
				</div>
			</div>

			<img src={require('assets/images/22.webp')} alt='avatar' />
			{/* <Image layout='fill' objectFit='cover' className={styles.image} src={require('assets/images/22.webp')} alt='avatar' /> */}
		</div>
	);
}

export default Header;
