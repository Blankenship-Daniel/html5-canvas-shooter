import { Options as GameOptions } from "../config";
import { drawGrid } from "../draw-grid";
import { drawPlayer } from "../draw-player";
import { Player } from "../models";

export function redraw(
  context: CanvasRenderingContext2D,
  moveX: number,
  moveY: number
) {
  context.clearRect(0, 0, GameOptions.CANVAS_WIDTH, GameOptions.CANVAS_HEIGHT);
  drawGrid(
    context,
    GameOptions.CANVAS_WIDTH,
    GameOptions.CANVAS_HEIGHT,
    GameOptions.CANVAS_SQUARE_SIZE
  );
  Player.setX(moveX);
  Player.setY(moveY);
  drawPlayer(context, Player);
}
