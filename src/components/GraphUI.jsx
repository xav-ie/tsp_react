import React, { useCallback } from 'react';
import { animated, interpolate, useSpring } from 'react-spring';
import ArcUI from './ArcUI';
import ButtonUI from './ButtonUI';
import NodeUI from './NodeUI';

const GraphUI = ({ setCurrentCityNumber, graph }) => {
	const ZOOM_COEFF = 0.3;
	const MOVE_COEFF = 150;
	const DEFAULT_TRANSFORM = {
		moveX: 100,
		moveY: 100,
		zoomAmount: 16,
	};
	const [transformAmount, setTransformAmount] = useSpring(
		() => DEFAULT_TRANSFORM
	);

	const style = {
		border: '3px solid black',
		width: 'calc(100vw - 2em)',
		height: 'calc(100vw - 2em)',
		maxHeight: 'calc(100vh - 50px - 2em)',
		maxWidth: 'calc(100vh - 50px - 2em)',
	};
	const runButtonClicked = () => {
		// graph.runManager();
	};

	const zoom = (amount) => {
		setTransformAmount({
			zoomAmount: transformAmount.zoomAmount.value * amount,
		});
	};
	const move = ({ x = 0, y = 0 }) => {
		setTransformAmount({
			moveX: transformAmount.moveX.value + x,
			moveY: transformAmount.moveY.value + y,
		});
	};

	const onScroll = useCallback((e) => {
		e.preventDefault();
		console.log(e);
		// return set({ st: e.target.scrollTop / 30 })
	}, []);

	return (
		<svg
			viewBox="0 0 1000 1000"
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			width="90px"
			height="90px"
			onScroll={onScroll}
		>
			<animated.g
				transform={interpolate(
					[transformAmount.moveX, transformAmount.moveY, transformAmount.zoomAmount],
					(mx, my, zA) => `translate(${mx} ${my}) scale(${zA})`
				)}
			>
				{graph.A.arcs.map((arc) => (
					<ArcUI
						key={arc.i.cityNumber + ' ' + arc.j.cityNumber}
						u={Math.createVector(arc.i.coord.x, arc.i.coord.y)}
						v={Math.createVector(arc.j.coord.x, arc.j.coord.y)}
					/>
				))}

				{graph.N.cities.map((city) => (
					<NodeUI
						key={city.cityNumber + ' ' + city.coord.x + ' ' + city.coord.y}
						x={city.coord.x}
						y={city.coord.y}
						text={city.cityNumber}
						setCurrentCityNumber={setCurrentCityNumber}
					/>
				))}
			</animated.g>
			<ButtonUI
				width="100"
				height="50"
				x="900"
				y="0"
				background="#333"
				text="RUN"
				onClick={runButtonClicked}
			/>
			<ButtonUI
				width="50"
				height="50"
				x="950"
				y="950"
				background="#333"
				text="+"
				onClick={() => zoom(1 + ZOOM_COEFF)}
			/>
			<ButtonUI
				width="50"
				height="50"
				x="900"
				y="950"
				background="#333"
				text="-"
				onClick={() => zoom(1 - ZOOM_COEFF)}
			/>
			<ButtonUI
				width="50"
				height="50"
				x="900"
				y="900"
				background="#333"
				text="<"
				onClick={() => move({ x: MOVE_COEFF })}
			/>
			<ButtonUI
				width="50"
				height="50"
				x="950"
				y="900"
				background="#333"
				text=">"
				onClick={() => move({ x: -MOVE_COEFF })}
			/>
			<ButtonUI
				width="50"
				height="50"
				x="900"
				y="850"
				background="#333"
				text="up"
				onClick={() => move({ y: MOVE_COEFF })}
			/>
			<ButtonUI
				width="50"
				height="50"
				x="950"
				y="850"
				background="#333"
				text="down"
				onClick={() => move({ y: -MOVE_COEFF })}
			/>
		</svg>
	);
};

export default GraphUI;

// viewBox={`${transformAmount.moveX}
// 		  ${transformAmount.moveY}
// 		  ${1000 * transformAmount.zoomAmount}
// 		  ${1000 * transformAmount.zoomAmount}`}
