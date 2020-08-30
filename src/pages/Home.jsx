import React, { useState } from "react";
import GraphUI from "../components/GraphUI";
import CityInfo from "../components/CityInfo";
import Graph from "../old/Graph";

const INITIAL_GRAPH = new Graph();

const Home = () => {
    const [currentCityNumber, setCurrentCityNumber] = useState(1);
    const [graph, setGraph] = useState(INITIAL_GRAPH);

    return (
    <main>
        <GraphUI setCurrentCityNumber={setCurrentCityNumber} graph={graph}/>
        <CityInfo currentCityNumber={currentCityNumber} graph={graph}/>
    </main>
    );
}

export default Home;