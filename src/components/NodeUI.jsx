import React from 'react';

const NodeUI = ({ x = 0, y = 0, r = 2, text = '', setCurrentCityNumber }) => {
	return (
		<g onMouseOver={() => setCurrentCityNumber(text)}>
			<circle cx={x} cy={y} r={r} />
			<text
				x={x}
				y={y}
				fill={'white'}
				fontSize="2px"
				dominantBaseline="middle"
				textAnchor="middle"
			>
				{text}
			</text>
		</g>
	);
};

export default NodeUI;

