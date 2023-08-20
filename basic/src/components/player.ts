import { IAxis } from "../@types";
import { ctx } from '../canvas';

class Player {
  position: IAxis;
  velocity: IAxis;

  constructor({ position, velocity }: { position: IAxis, velocity: IAxis }) {
    this.position = position;
    this.velocity = velocity;
  }

  draw(width: number, height: number, color?: string) {
    ctx.fillStyle = color || 'White';
    ctx.fillRect(this.position.x, this.position.y, width, height);
  }
}

export default Player; 
