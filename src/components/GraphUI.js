import React, { useEffect, useState } from 'react';
import Graph from "../old/Graph";
import ButtonUI from "./ButtonUI";
import NodeUI from "./NodeUI";

const GraphUI = () => {
    const [graph, setGraph] = useState(new Graph());
    const zoomCoeff = .3;
    const moveCoeff = 20;
    const defaultSVGFit = {
        startX: 0,
        startY: 0,
        width: 1000,
        height: 1000
    }
    const [svgFit, setSVGFit] = useState(defaultSVGFit);

    useEffect(() => {
        console.log(graph.N);
        return () => {

        }
    });

    const style = {
        border: "3px solid black",
        width: "calc(100vw - 2em)",
        height: "calc(100vw - 2em)",
        maxHeight: "calc(100vh - 50px - 2em)",
        maxWidth: "calc(100vh - 50px - 2em)"
    }
    const runButtonClicked = () => {
        // graph.runManager();
    }

    const zoom = (amount) => {
        setSVGFit({ ...svgFit, width: svgFit.width * amount, height: svgFit.height * amount })
    }
    const move = ({ x = 0, y = 0 }) => {
        setSVGFit({ ...svgFit, startX: svgFit.startX + x, startY: svgFit.startY + y, })
    }
    return (
        <svg viewBox={`${svgFit.startX} ${svgFit.startY} ${svgFit.width} ${svgFit.height}`} style={style} xmlns="http://www.w3.org/2000/svg" width="90px" height="90px">
            <ButtonUI svgFit={svgFit} width="100" height="50" x="900" y="0" background="#333" text="RUN" onClick={runButtonClicked} />
            <ButtonUI svgFit={svgFit} width="50" height="50" x="950" y="950" background="#333" text="+" zoomCoeff={zoomCoeff} onClick={() => zoom(1 - zoomCoeff)} />
            <ButtonUI svgFit={svgFit} width="50" height="50" x="900" y="950" background="#333" text="-" zoomCoeff={zoomCoeff} onClick={() => zoom(1 + zoomCoeff)} />
            <ButtonUI svgFit={svgFit} width="50" height="50" x="900" y="900" background="#333" text="<" onClick={() => move({ x: moveCoeff })} />
            <ButtonUI svgFit={svgFit} width="50" height="50" x="950" y="900" background="#333" text=">" onClick={() => move({ x: -moveCoeff })} />
            <ButtonUI svgFit={svgFit} width="50" height="50" x="900" y="850" background="#333" text="up" onClick={() => move({ y: moveCoeff })} />
            <ButtonUI svgFit={svgFit} width="50" height="50" x="950" y="850" background="#333" text="down" onClick={() => move({ y: -moveCoeff })} />

            {graph.N.cities.map(city => <NodeUI key={city.cityNumber} x={city.coord.x} y={city.coord.y} text={city.cityNumber} />)}
        </svg>
    );
}

export default GraphUI;