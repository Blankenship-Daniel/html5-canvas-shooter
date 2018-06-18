export function drawPlayer(context: CanvasRenderingContext2D, player: any) {
  context.beginPath();
  context.arc(player.x, player.y, player.radius, 0, 2 * Math.PI);
  context.stroke();
}
