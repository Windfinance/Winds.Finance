import styles from './RoadMap.module.scss';
import Timeline from './components/Timeline';
import Fade from 'react-reveal/Fade';

// https://github.com/MichaelFerrari/react-timeline-semantic-ui
function RoadMap() {
	return (
		<div id='Roadmap' className={styles.main}>
			<div className={styles.container}>
				<Fade bottom>
					<h1>
						Roadmap<span>.</span>
					</h1>
				</Fade>

				<Timeline />
			</div>
		</div>
	);
}

export default RoadMap;
