let CITY_NUM = 0;
class City {
  constructor(coord, demand, readyTime, dueDate, serviceTime = 0) {
    this.coord = coord;
    this.demand = demand;
    this.readyTime = readyTime;
    this.dueDate = dueDate;
    this.timeWindow = [this.readyTime, this.dueDate]; // [a_i,b_i]
    this.serviceTime = serviceTime; // s_i
    this.cityNumber = ++CITY_NUM;
    this.arrivalTime = []; // t_i
    // this.departureTime = null;
  }
  
  draw() {
    
  }
}


export default City;