import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';
import { Player } from './player.js';

export class Enemy extends Actor {
    constructor() {
        super({ width: Resources.Enemy.width, height: Resources.Enemy.height -100});
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Enemy.toSprite());
        let size = 0.5
        this.scale = new Vector(size, size);
        this.pos = new Vector(0, 350);
        this.vel = new Vector(150, -3);
        // Math.random() * (0.3 - 0.2) + 0.2;
    }
}
