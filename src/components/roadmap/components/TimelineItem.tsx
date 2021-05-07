import styles from './Timeline.module.scss';

interface ITimelineItem {
	data?: {
		text?: string;
		date?: string;
		category?: {
			tag?: string;
			color?: string;
		};
		link?: {
			url?: string;
			text?: string;
		};
		check: boolean;
	};
}

function TimelineItem({ data }: ITimelineItem) {
	return (
		<div className={styles['timeline-item']}>
			<div className={styles['timeline-item-content']}>
				<span className={styles['tag']} style={{ background: data.category.color }}>
					{data.category.tag}
				</span>
				<time>{data.date}</time>
				<p>{data.text}</p>
				{data.link && (
					<a href={data.link.url} target='_blank' rel='noopener noreferrer'>
						{data.link.text}
					</a>
				)}
				{data.check ? (
					<img className={styles.check} src={require('assets/images/iconfinder_Checkmark_2190986.svg')} alt='avatar' />
				) : (
					<span className={styles.circle} />
				)}
			</div>
		</div>
	);
}

export default TimelineItem;
