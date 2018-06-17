import { KeyEvents } from "./key-events";
import { redraw } from "./redraw";
import { Options as GameOptions } from "./options";

export function setupControls(context: CanvasRenderingContext2D) {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    switch (event.key) {
      case KeyEvents.UP:
        redraw(context, 0, -GameOptions.CANVAS_SQUARE_SIZE);
        break;
      case KeyEvents.DOWN:
        redraw(context, 0, GameOptions.CANVAS_SQUARE_SIZE);
        break;
      case KeyEvents.LEFT:
        redraw(context, -GameOptions.CANVAS_SQUARE_SIZE, 0);
        break;
      case KeyEvents.RIGHT:
        redraw(context, GameOptions.CANVAS_SQUARE_SIZE, 0);
        break;
      default:
        break;
    }
  });
}
