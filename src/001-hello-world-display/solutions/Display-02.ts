export class Display {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

const display = new Display("Hello World");
console.log(display.message);
