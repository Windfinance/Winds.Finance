import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function Chart() {
	const dataMock = [
		{ title: 'Marketing & Partnerships', value: 5, color: '#27df9d2e' },
		{ title: 'Burned Initially', value: 30, color: '#27df9d2e' },
		{ title: 'Liquidity Locked', value: 50, color: '#27df9d2e' },
		{ title: 'Community Airdrop', value: 10, color: '#27df9d2e' },
		{ title: 'Development', value: 5, color: '#27df9d2e' }
	];

	const lineWidth = 60;

	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);
	const [headline, setHeadline] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (selected === 0) {
			setHeadline(dataMock[0].title);
		}

		if (selected === 1) {
			setHeadline(dataMock[1].title);
		}
		if (selected === 2) {
			setHeadline(dataMock[2].title);
		}
		if (selected === 3) {
			setHeadline(dataMock[3].title);
		}
		if (selected === 4) {
			setHeadline(dataMock[4].title);
		}
	}, [selected]);

	const data = dataMock.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: '#27df9d'
			};
		}
		if (selected === i) {
			return {
				...entry,
				color: '#27df9d'
			};
		}
		return entry;
	});

	return (
		<>
			<h2 style={{ textAlign: 'center', margin: '0rem' }}>
				{headline}

				<span>.</span>
			</h2>

			<PieChart
				style={{
					fontFamily: '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
					fontSize: '8px'
				}}
				data={data}
				radius={PieChart.defaultProps.radius - 6}
				lineWidth={60}
				segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
				segmentsShift={index => (index === selected ? 6 : 1)}
				animate
				label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
				labelPosition={100 - lineWidth / 2}
				labelStyle={{
					fill: '#fff',
					opacity: 0.75,
					pointerEvents: 'none'
				}}
				onClick={(_, index) => {
					setSelected(index === selected ? undefined : index);
				}}
				onMouseOver={(_, index) => {
					setHovered(index);
				}}
				onMouseOut={() => {
					setHovered(undefined);
				}}
			/>
		</>
	);
}

export default Chart;
