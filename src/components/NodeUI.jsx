import clamp from 'lodash/clamp';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';

const Group = styled(animated.g)`
	&:hover {
		fill: lightcoral;
	}
	cursor: pointer;
	transition: 0.2s ease-in-out fill;
	user-select: none;
`;

const NodeUI = ({ x = 0, y = 0, r = 2, text = '', setCurrentCityNumber }) => {
	const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
	const bind = useGesture({
		onDrag: ({ down, delta, velocity }) => {
			velocity = clamp(velocity, 1, 8);
			set({
				xy: down ? delta : [0, 0],
				config: { mass: velocity, tension: 150 * velocity, friction: 50 },
			});
		},
	});
	return (
	<Group
		onMouseOver={() => setCurrentCityNumber(text)}
		{...bind()}
		style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}
	>
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
