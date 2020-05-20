import {Cargo} from "./Cargo";
import {Astronaut} from "./Astronaut";
import {Payload} from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    astronauts: Astronaut[] = [];
    cargoItems: Cargo[] = [];

    constructor(name: string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]) {
        let sum: number;
        sum = 0;

        for(let i = 0; i < items.length; i++) {
            sum = +items[i].massKg;
        }
        return sum;
    }

    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload) {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        return false;
    }

    addCargo(cargo: Cargo) {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut) {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}

