import React from 'react';

const ButtonUI = ({ transformAmount, width, height, x = 0, y = 0, curve = 0, text = "", background = "black", fontColor = "white", onClick = () => alert("Please change default behavior.") }) => {
    const style = {
        //TODO: Implement hover styling
        cursor: "pointer"
    }
    

    return (
        <g className="ButtonUI" transform={`translate(${transformAmount.moveX} ${transformAmount.moveY}) scale(${transformAmount.zoomAmount})`}>
            <rect x={x} y={y} width={width} height={height} rx={curve} fill={background} />
            <text x={parseFloat(x) + parseFloat(width) / 2} y={parseFloat(y) + parseFloat(height) / 2} fill={fontColor} dominantBaseline="middle" textAnchor="middle">{text}</text>
            <rect style={style} x={x} y={y} width={width} height={height} fill="#FF00FF00" onClick={onClick} />
        </g>
    );
}

export default ButtonUI;