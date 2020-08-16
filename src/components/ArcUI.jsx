import React from "react";

const ArcUI = ({ u, v }) => {
    return (
        <>
              <line x1={u.x} y1={u.y} x2={v.x} y2={v.y} stroke="#00000018" strokeWidth="0.5"/>
        </>
    )
}

export default ArcUI;