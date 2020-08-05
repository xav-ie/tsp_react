import React from 'react';
import Button from "./Button";
import Node from "./Node";
import Utility from "../Utility";

const Graph = () => {
    const nodes = [{ x: 40, y: 200 }, {x: 400, y: 250}];


    const style = {
        border: "3px solid black",
        width: "calc(100vw - 2em)",
        height: "calc(100vw - 2em)",
        maxHeight: "calc(100vh - 50px - 2em)",
        maxWidth: "calc(100vh - 50px - 2em)"
    }
    return (
        <svg viewBox="0 0 1000 1000" style={style} xmlns="http://www.w3.org/2000/svg" width="90px" height="90px">
            <Button width={100} height={50} x={900} background="#333" text="RUN" onClick={() => console.log(Utility.parseInfo())} />
            {nodes.map(({x,y}) => <Node key={x+""+y} x={x} y={y} text={x}/>)}
        </svg>
    );
}

export default Graph;