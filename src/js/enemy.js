import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';
import { Player } from './player.js';

export class Enemy extends Actor {
    constructor(x,y) {
        super({x,y, width: Resources.Enemy.width - 100, height: Resources.Enemy.height -100});
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Enemy.toSprite());
        let size = 0.1
        this.scale = new Vector(size, size);
        // this.vel = new Vector(-150, 0);
        this.on('collisionstart', (evt) => this.onCollisionStart(evt));
        // Math.random() * (0.3 - 0.2) + 0.2;
    }


    onCollisionStart(evt){
        if (evt.other instanceof Player) {
            // this.pos = new Vector(700, 900)
        }
    }
}
