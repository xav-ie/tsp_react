import React from 'react';
import styled from 'styled-components';
const Group = styled.g`
	&:hover {
		fill: ${(props) => props.backgroundHover || 'lightcoral'};
	}
	cursor: pointer;
	transition: 0.2s ease-in-out fill;
	user-select: none;
	fill: ${(props) => props.background || 'yellow'};
`;

const ButtonUI = ({
	width,
	height,
	x = 0,
	y = 0,
	curve = 0,
	text = '',
	background,
	backgroundHover,
	fontColor = 'white',
	onClick = () => alert('Please change default behavior.'),
}) => {
	return (
		<Group
			onClick={onClick}
			background={background}
			backgroundHover={backgroundHover}
		>
			<rect x={x} y={y} width={width} height={height} rx={curve} />
			<text
				x={parseFloat(x) + parseFloat(width) / 2}
				y={parseFloat(y) + parseFloat(height) / 2}
				fill={fontColor}
				dominantBaseline="middle"
				textAnchor="middle"
			>
				{text}
			</text>
		</Group>
	);
};

export default ButtonUI;
