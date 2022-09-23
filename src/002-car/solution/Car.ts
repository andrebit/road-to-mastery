import { BreakPedal } from "./BreakPedal";
import { Engine } from "./Engine";
import { GasPedal } from "./GasPedal";
import { Key } from "./Key";

export class Car {
  brand: string;
  chassisNumber: number;
  productionYear: number;
  engine: Engine;
  key: Key;
  gasPedal: GasPedal;
  breakPedal: BreakPedal;

  constructor(
    brand: string,
    chassisNumber: number,
    productionYear: number,
    engine: Engine,
    key: Key,
    gasPedal: GasPedal,
    breakPedal: BreakPedal
  ) {
    this.brand = brand;
    this.chassisNumber = chassisNumber;
    this.productionYear = productionYear;
    this.engine = engine;
    this.key = key;
    this.gasPedal = gasPedal;
    this.breakPedal = breakPedal;
  }

  turn(state: boolean): void {
    this.key.turn(state);
    console.log(`Car key is turned ${this.key.isTurnedOn ? "on" : "off"}`);
  }

  move(timeInSeconds: number): void {
    if (
      this.gasPedal.isPressed &&
      this.breakPedal.isPressed === false &&
      this.key.isTurnedOn
    ) {
      this.engine.work(timeInSeconds);
    } else {
      console.log(`
            Message: It is not possible to move the car,
            Key: ${this.key.isTurnedOn},
            Gas Pedal: ${this.gasPedal.isPressed},
            Break Pedal: ${this.breakPedal.isPressed}
        `);
    }
  }
}
