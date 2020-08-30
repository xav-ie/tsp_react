import React from 'react';
import styled from 'styled-components';
const Group = styled.g`
	&:hover {
		fill: lightcoral;
	}
	cursor: pointer;
	transition: .2s ease-in-out fill;
	user-select: none;
`;

const NodeUI = ({ x = 0, y = 0, r = 2, text = '', setCurrentCityNumber }) => {
	return (
		<Group onMouseOver={() => setCurrentCityNumber(text)}>
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
		</Group>
	);
};

export default NodeUI;
