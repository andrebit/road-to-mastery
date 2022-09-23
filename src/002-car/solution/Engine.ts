import { GasTank } from "./GasTank";

export class Engine {
  brand: string;
  id: number;
  gasTank: GasTank;

  constructor(brand: string, id: number, gasTank: GasTank) {
    this.brand = brand;
    this.id = id;
    this.gasTank = gasTank;
  }

  work(timeInSeconds: number): void {
    if(this.gasTank.currentVolume >= timeInSeconds) {
      this.gasTank.burn(timeInSeconds);
    }
    else
    {
      console.log(`The travel time of ${timeInSeconds} seconds exceeds the ${this.gasTank.currentVolume} liters of gas available`);
    }
  }
}