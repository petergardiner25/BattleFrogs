import { Game } from './game.js';
import { canvasGameTutorial } from './canvasGameTutorial.js';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const gameDocument = document as Document;

// const game = new Game(ctx, canvas);
const game = new canvasGameTutorial(ctx, canvas, gameDocument);
game.run();
