import React from 'react';
import styled from "styled-components";
const Group = styled.g`
	&:hover {
		fill: lightcoral;
	}
	cursor: pointer;
	transition: 0.2s ease-in-out fill;
	user-select: none;
`;

const ButtonUI = ({ width, height, x = 0, y = 0, curve = 0, text = "", background = "black", fontColor = "white", onClick = () => alert("Please change default behavior.") }) => {
    

    return (
        <Group onClick={onClick}>
            <rect x={x} y={y} width={width} height={height} rx={curve} />
            <text x={parseFloat(x) + parseFloat(width) / 2} y={parseFloat(y) + parseFloat(height) / 2} fill={fontColor} dominantBaseline="middle" textAnchor="middle">{text}</text>
        </Group>
    );
}

export default ButtonUI;