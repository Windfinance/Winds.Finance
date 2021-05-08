import styles from './Navigation.module.scss';
import Link from 'next/link';
import Tooltip from '../Tooltip';
import SmoothScroll from 'shared/functions/SmoothScroll';

function Navigation() {
	const Scroll = (section: string) => {
		SmoothScroll.scrollTo(section);
	};

	return (
		<div className={styles.main}>
			<img className={styles['main__logo']} src={require('assets/images/x.svg')} alt='avatar' />

			<ul className={styles['main__navigation']}>
				<li>
					<a onClick={() => Scroll('About')}>About</a>
				</li>

				<li>
					<a onClick={() => Scroll('Tokenomics')}>Tokenomics</a>
				</li>

				<li>
					<a onClick={() => Scroll('Roadmap')}>Roadmap</a>
				</li>

				<li>
					<Tooltip title={'Comming Soon'}>
						<a>Litepaper</a>
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
