export class Game {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  private angle: number; // Persistent angle variable

  constructor(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.angle = 0; // Initialize angle

    // Ensure canvas dimensions match its CSS styling
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  private drawFace(x: number, y: number) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(x + 35, y); // Adjusted for mouth position
    ctx.arc(x, y, 35, 0, Math.PI, false); // Mouth
    ctx.moveTo(x - 10, y - 10);
    ctx.arc(x - 15, y - 10, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(x + 20, y - 10);
    ctx.arc(x + 15, y - 10, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
  }

  private animate = () => {
    const ctx = this.ctx;
    const canvas = this.canvas;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Circle animation parameters
    const centerX = canvas.width / 2; // Dynamic center of the canvas
    const centerY = canvas.height / 2;
    const radius = 100; // Radius of the circular path

    // Calculate new x and y based on the angle
    const x = centerX + radius * Math.cos(this.angle);
    const y = centerY + radius * Math.sin(this.angle);

    // Draw the face at the new position
    this.drawFace(x, y);

    // Increment the angle for the next frame
    this.angle += 0.02; // Adjust speed by changing this value

    // Loop the animation
    requestAnimationFrame(this.animate);
  };

  public run() {
    this.animate();
  }
}
