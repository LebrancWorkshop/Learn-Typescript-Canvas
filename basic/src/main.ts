import { canvas, ctx } from "./canvas";
import { config } from './config/config';
import Player from "./components/player";

canvas.width = config.width;
canvas.height = config.height;

ctx.fillStyle = 'Black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const player = new Player({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  }
});


player.draw(100, 20);
