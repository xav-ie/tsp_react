import React from 'react';

const ButtonUI = ({ svgFit, width, height, x = 0, y = 0, curve = 0, text = "", background = "black", fontColor = "white", onClick = () => alert("Please change default behavior.")}) => {
    const style = {
        //TODO: Implement hover styling
        cursor: "pointer"
    }
    
    return (
        <>
            <rect x={parseFloat(x)+-svgFit.startX+"%"} y={parseFloat(y)+-svgFit.startY+"%"} width={width} height={height} rx={curve} fill={background} />
            <text x={`${svgFit.startX + parseFloat(x) + parseFloat(width) / 2}%`} y={`${svgFit.startY + parseFloat(y) + parseFloat(height) / 2}%`} fill={fontColor} dominantBaseline="middle" textAnchor="middle">{text}</text>))
              
            <rect style={style} x={parseFloat(x) + -svgFit.startX + "%"} y={parseFloat(y) + -svgFit.startY + "%"} width={width} height={height} fill="#FF00FF00" onClick={onClick} />
        </>
    );
}

export default ButtonUI;