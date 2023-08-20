import { canvas, ctx } from "./canvas";
import { config } from './config/config';

canvas.width = config.width;
canvas.height = config.height;

ctx.fillStyle = 'Black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
