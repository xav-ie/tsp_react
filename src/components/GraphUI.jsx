import React, { useEffect, useState } from 'react';
import Graph from '../old/Graph';
import ArcUI from './ArcUI';
import ButtonUI from './ButtonUI';
import NodeUI from './NodeUI';


const GraphUI = ({setCurrentCityNumber, graph}) => {
	const ZOOM_COEFF = 0.3;
	const MOVE_COEFF = 20;
	const DEFAULT_TRANSFORM = {
		moveX: -15,
		moveY: -15,
		zoomAmount: 0.08,
	};
	const [transformAmount, setTransformAmount] = useState(DEFAULT_TRANSFORM);
	
	useEffect(() => {
		// console.log(graph.A.arcs);
		return () => {};
	});

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
			...transformAmount,
			zoomAmount: transformAmount.zoomAmount * amount,
		});
	};
	const move = ({ x = 0, y = 0 }) => {
		setTransformAmount({
			...transformAmount,
			moveX: transformAmount.moveX + x,
			moveY: transformAmount.moveY + y,
		});
	};
	return (
		<svg
			viewBox={`${0 + transformAmount.moveX} ${0 + transformAmount.moveY} ${
				1000 * transformAmount.zoomAmount
			} ${1000 * transformAmount.zoomAmount}`}
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			width="90px"
			height="90px"
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
			<ButtonUI
				transformAmount={transformAmount}
				width="100"
				height="50"
				x="900"
				y="0"
				background="#333"
				text="RUN"
				onClick={runButtonClicked}
			/>
			<ButtonUI
				transformAmount={transformAmount}
				width="50"
				height="50"
				x="950"
				y="950"
				background="#333"
				text="+"
				zoomCoeff={ZOOM_COEFF}
				onClick={() => zoom(1 - ZOOM_COEFF)}
			/>
			<ButtonUI
				transformAmount={transformAmount}
				width="50"
				height="50"
				x="900"
				y="950"
				background="#333"
				text="-"
				zoomCoeff={ZOOM_COEFF}
				onClick={() => zoom(1 + ZOOM_COEFF)}
			/>
			<ButtonUI
				transformAmount={transformAmount}
				width="50"
				height="50"
				x="900"
				y="900"
				background="#333"
				text="<"
				onClick={() => move({ x: MOVE_COEFF })}
			/>
			<ButtonUI
				transformAmount={transformAmount}
				width="50"
				height="50"
				x="950"
				y="900"
				background="#333"
				text=">"
				onClick={() => move({ x: -MOVE_COEFF })}
			/>
			<ButtonUI
				transformAmount={transformAmount}
				width="50"
				height="50"
				x="900"
				y="850"
				background="#333"
				text="up"
				onClick={() => move({ y: MOVE_COEFF })}
			/>
			<ButtonUI
				transformAmount={transformAmount}
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
