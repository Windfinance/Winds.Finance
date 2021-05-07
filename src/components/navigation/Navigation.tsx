import styles from './Navigation.module.scss';
import Link from 'next/link';
import Tooltip from '../Tooltip';

function Navigation() {
	return (
		<div className={styles.main}>
			<img className={styles['main__logo']} src={require('assets/images/x.svg')} alt='avatar' />
			{/* <img className={styles['main__logo']} src={require('assets/images/logo3.svg')} alt='avatar' /> */}

			<ul className={styles['main__navigation']}>
				<li>
					<Link href={'/'}>Features</Link>
				</li>

				<li>
					<Link href={'/'}>Tokenomics</Link>
				</li>

				<li>
					<Link href={'/'}>Roadmap</Link>
				</li>

				<li>
					<Tooltip title={'Comming Soon'}>
						<Link href={'/'}>Litepaper</Link>
					</Tooltip>
				</li>

				<li className={styles.trade}>
					<Link href={'#'}>Trade</Link>{' '}
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
