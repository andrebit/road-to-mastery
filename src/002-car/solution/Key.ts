export class Key {
    isTurnedOn: boolean;
    constructor(isTurnedOn: boolean) {
        this.isTurnedOn = isTurnedOn;
    }

    turn(state: boolean): void {
        this.isTurnedOn = state;
    }
}