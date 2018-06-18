import { Options as GameOptions } from "../config";

const OFFSET = GameOptions.CANVAS_PLAYER_OFFSET;

export class Player {
  static x: number = OFFSET;
  static y: number = OFFSET;
  static radius: number = OFFSET;

  static setX(x): void {
    this.x += x;
    if (this.x > GameOptions.CANVAS_WIDTH) {
      this.x = OFFSET;
    } else if (this.x < 0) {
      this.x = GameOptions.CANVAS_WIDTH - OFFSET;
    }
  }

  static setY(y): void {
    this.y += y;
    if (this.y > GameOptions.CANVAS_HEIGHT) {
      this.y = OFFSET;
    } else if (this.y < 0) {
      this.y = GameOptions.CANVAS_HEIGHT - OFFSET;
    }
  }
}
