import React from 'react';

const Button = ({ width, height, x = 0, y = 0, curve = 0, text = "", background = "black", fontColor = "white", onClick = () => alert("Please change default behavior.") }) => {
    const style = {
        //TODO: Implement hover styling
        cursor: "pointer"
    }
    return (
        <>
            <rect x={x} y={y} width={width} height={height} rx={curve} fill={background} />
            <text x={x + width / 2} y={y + height / 2} fill={fontColor} dominantBaseline="middle" textAnchor="middle">{text}</text>
            <rect style={style} x={x} y={y} width={width} height={height} fill="#FF00FF00" onClick={onClick} />
        </>
    );
}

export default Button;