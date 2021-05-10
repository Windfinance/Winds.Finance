import styles from './Navigation.module.scss';
import Link from 'next/link';
import Tooltip from '../Tooltip';
import SmoothScroll from 'shared/functions/SmoothScroll';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

function Navigation() {
	const Scroll = (section: string) => {
		SmoothScroll.scrollTo(section);
	};

	const [isOpen, setOpen] = useState(false);
	const windowWidth = useWindowWidth();

	return (
		<div className={styles.main}>
			<img className={styles['main__logo']} src={require('assets/images/x.svg')} alt='avatar' />

			{windowWidth <= 956 && (
				<div className={styles.hamburger}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			)}

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

			{isOpen && (
				<ul className={styles['navigation-mobile']}>
					<li>
						<img className={styles['main__logo']} src={require('assets/images/x.svg')} alt='avatar' />
					</li>
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
						<Link href={'#'}>Buy Token</Link>{' '}
					</li>
				</ul>
			)}
		</div>
	);
}

export default Navigation;
