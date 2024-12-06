const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

if (ctx) {
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 150, 100);
}
