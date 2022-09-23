export class GasTank {
  readonly maxVolume: number = 100;
  currentVolume: number;
  constructor(currentVolume: number) {
    this.currentVolume = currentVolume;
  }

  burn(amount: number): void {
    console.log(`Burning ${amount} units of gas`);
    this.currentVolume-=amount;
  }
}