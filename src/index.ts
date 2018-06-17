import "./style.css";
import {
  Options as GameOptions,
  drawGrid,
  drawPlayer,
  setupControls,
  Player
} from "./game-lib";

const canvasEl: HTMLCanvasElement = document.querySelector("canvas");
canvasEl.width = GameOptions.CANVAS_WIDTH;
canvasEl.height = GameOptions.CANVAS_HEIGHT;
const context: CanvasRenderingContext2D = canvasEl.getContext("2d");

drawGrid(
  context,
  GameOptions.CANVAS_WIDTH,
  GameOptions.CANVAS_HEIGHT,
  GameOptions.CANVAS_SQUARE_SIZE
);
setupControls(context);
drawPlayer(context, Player);
