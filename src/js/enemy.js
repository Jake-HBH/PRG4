import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';
import { Player } from './player.js';

export class Enemy extends Actor {
    constructor(x,y) {
        super({x,y, width: Resources.Enemy.width - 100, height: Resources.Enemy.height -100});
        

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Enemy.toSprite());
        this.scale = new Vector(0.1, 0.1);
        this.vel = new Vector(-50, 0)
    }



    // this.body.friction = 0.1
    // this.body.restitution = 0;

    // this.startpositionX = startpositionX;
    // this.endpositionX = endpositionX;
    // this.startpositionY = startpositionY;
    // this.endpositionY = endpositionY;
    // this.speedX = speedX;
    // this.speedY = speedY;
    // this.directionX = 1;
    // this.directionY = 1;
    // update(engine, delta) {
    //     super.update(engine, delta);

    //     this.pos.x += this.speedX * this.directionX * delta / 1000;

    //     if (this.pos.x >= this.endpositionX) {
    //         this.pos.x - this.endpositionX;
    //         this.directionX = -1;
    //     } else if (this.pos.x <= this.startpositionX) {
    //         this.pos.x - this.startpositionX;
    //         this.directionX = 1;
    //     }
    //     this.pos.y += this.speedY * this.directionY * delta / 1000;

    //     if (this.pos.y >= this.endpositionY) {
    //         this.pos.y - this.endpositionY;
    //         this.directionY = -1;
    //     } else if (this.pos.y <= this.startpositionY) {
    //         this.pos.y - this.startpositionY;
    //         this.directionY = 1;
    //     }
    // }
}
