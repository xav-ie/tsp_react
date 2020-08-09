import StateGraph from "./StateGraph";

class StateGraphManager {
    constructor(G) {
        this.listOfStates = [];
        this.G = G;
        //   👇the first array is what would be returned on a first run 
        // [[state1, state2], [state1-1, state1-2, state1-3, state2-1, state2-2] , []]
    }


    go() {
        const sgs = new StateGraph(this.G.N);
        sgs.getGraph();
        const initList = sgs.statesList;
        this.listOfStates[0] = initList;
        let currentIndex = -1;
        while (this.listOfStates[currentIndex + 1].length !== 0) {
            currentIndex += 1;
            this.loopStates(currentIndex);
        }

        // filter final states
        let finalStateList = this.listOfStates[this.listOfStates.length - 2];
        for (let i = 0; i < finalStateList.length; i++) {
            const currentState = finalStateList[i];
            for (let j = 0; j < finalStateList.length; j++) {
                // if (i == j) continue;
                const otherState = finalStateList[j];
                if (currentState[2] < otherState[2] && currentState[3] < otherState[3]) {
                    // delete otherState
                    finalStateList.splice(j, 1);
                    j -= 1;
                }
                else if (currentState[2] > otherState[2] && currentState[3] > otherState[3]) {
                    // delete currentState
                    finalStateList.splice(i, 1);
                    i -= 1;
                    break;
                }
            }
        }
        finalStateList = finalStateList.filter(state => !(state[3]===parseFloat("Infinity") || state[4]===parseFloat("Infinity") || isNaN(state[3]) || isNaN(state[4])));
        // console.log(finalStateList);
        return finalStateList;
    }

    loopStates(index) {
        this.listOfStates[index + 1] = [];
        // now loop through states and add to next index
        for (let i = 0; i < this.listOfStates[index].length; i++) {
            const currentState = this.listOfStates[index][i];
            const sgs = new StateGraph(this.G.N, currentState[0], currentState[4], currentState[3], currentState[5]);
            sgs.getGraph();
            const nextList = sgs.statesList;
            for (let j = 0; j < nextList.length; j++) {
                this.listOfStates[index + 1].push(nextList[j]);
            }
        }
    }


}


export default StateGraphManager;