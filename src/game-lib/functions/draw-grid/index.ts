export function drawGrid(
  context: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  squareSize: number
) {
  for (let x = 0; x < canvasWidth; x++) {
    if (x % squareSize === 0) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
      context.stroke();
    }
  }
  for (let y = 0; y < canvasHeight; y++) {
    if (y % squareSize === 0) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
      context.stroke();
    }
  }
}
