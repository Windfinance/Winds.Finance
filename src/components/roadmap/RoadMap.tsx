import styles from './RoadMap.module.scss';
import Timeline from './components/Timeline';

// https://github.com/MichaelFerrari/react-timeline-semantic-ui
function RoadMap() {
	return (
		<div id='Roadmap' className={styles.main}>
			<div className={styles.container}>
				<h1>
					Roadmap<span>.</span>
				</h1>

				<Timeline />
			</div>
		</div>
	);
}

export default RoadMap;
