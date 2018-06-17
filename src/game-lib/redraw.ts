import { Options as GameOptions } from "./options";
import { drawGrid } from "./draw-grid";
import { drawPlayer } from "./draw-player";
import { Player } from "./player";

export function redraw(
  context: CanvasRenderingContext2D,
  moveX: number,
  moveY: number
) {
  console.log(Player);
  context.clearRect(0, 0, GameOptions.CANVAS_WIDTH, GameOptions.CANVAS_HEIGHT);
  drawGrid(
    context,
    GameOptions.CANVAS_WIDTH,
    GameOptions.CANVAS_HEIGHT,
    GameOptions.CANVAS_SQUARE_SIZE
  );
  Player.x += moveX;
  Player.y += moveY;
  drawPlayer(context, Player);
}
