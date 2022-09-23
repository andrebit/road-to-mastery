export class GasPedal {
    isPressed: boolean;
    constructor(isPressed: boolean) {
        this.isPressed = isPressed;
    }
    press(state: boolean) {
        this.isPressed = state;
    }
}