import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Rock extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Rock.width, height: Resources.Rock.height });
        // this.scale = new Vector(2, 2)
    }

    onInitialize() {
        this.graphics.use(Resources.Rock.toSprite());
        this.body.collisionType = CollisionType.Fixed; // Fixed collision type
    }
}
